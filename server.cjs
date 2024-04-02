const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const { allowedIPs, company, orderQuantity } = require("./serverTempData.cjs");


const app = express();



// server를 이용 가능한 ip인지 확인하는 미들웨어 함수
// express는 요청온 ip 주소를 ipv6로 반환함
// const checkAllowedIP = (req, res, next) => {
//     const clientIP = req.ip.includes('::ffff:') ? req.ip.split(':').pop() : req.ip;
//     console.log(clientIP);

//     if (allowedIPs.includes(clientIP)) {
//         console.log("allowed ip");
//         next();
        
//     } else {
//         console.log(`${clientIP} attempted access and blocked`);
//         res.status(400).send("IP Address not allowed");
//     }
// };




// server 설정
dotenv.config({path: ".env.dev"});
app.use(cors());
// app.use(checkAllowedIP);



// mysql 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


// mysql 연결 확인 api
// connection.connect((err) => {
//     if (err) {
//         console.error("Error connecting to MySQL database: " + err.stack);
//         return;
//     }

//     console.log("Connected to MySQL database as id " + connection.threadId);
// });



/**
 * 허용된 IP인지 확인하는 API
 */
app.get("/", (req, res) => {
    const clientIP = req.ip.includes('::ffff:') ? req.ip.split(':').pop() : req.ip;

    if (allowedIPs.includes(clientIP)) {
        console.log("allowed ip - " + clientIP);
        res.status(200).send({"company": company[`${clientIP}`]});
        
    } else {
        console.log(`${clientIP} attempted access and blocked`);
        res.status(400).send("IP Address not allowed");
    }
});



/**
 * 매출량 관련 데이터 요청 API
 */
app.get("/get-order-quantity", (req, res) => {
    try {
        const companyIP = Object.keys(company).find(key => company[key] === req.query.company);

        if (companyIP === undefined) throw new Error("요청을 보낸 기업에 해당하는 IP가 없습니다.");

        const orderData = orderQuantity[companyIP];    // 매출 관련 데이터
        let thisMonth = 0;                             // 이번 달 총 주문량
        let last3MonthArr = [0, 0, 0];                 // 지난 3개월 전 총 주문량
        let lastYearLast4MonthArr = [0, 0, 0, 0];      // 작년 3개월 전 총 주문량

    
        // 내림차순 정렬 (이번달 매출량 기준)
        orderData.sort((a, b) => {
            return b.thisMonthQuantity - a.thisMonthQuantity
        });


        // 총합 계산
        for (const data of orderData) {
            thisMonth += data.thisMonthQuantity;

            for (let i = 0; i < data.last3MonthQuantity.length; i++) {
                last3MonthArr[i] += data.last3MonthQuantity[i];
            }

            for (let i = 0; i < data.lastYear4MonthQ.length; i++) {
                lastYearLast4MonthArr[i] += data.lastYear4MonthQ[i];
            }
        }


        // 응답
        res.status(200).send({
            "total": orderQuantity[companyIP],
            "thisMonth": thisMonth,
            "last3MonthArr": last3MonthArr,
            "lastYearLast4MonthArr": lastYearLast4MonthArr
        });

    } catch (error) {
        console.error("매출량 데이터 처리 중 Error: " + error);
        res.status(400).send("Server Error");
    }
});



// server 시작
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});