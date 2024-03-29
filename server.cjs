const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");


const app = express();


// 임시 허용 ip 배열 (나중에 DB로 옮길 예정)
const allowedIPs = [
    "127.0.0.1",
    "192.168.123.110",
    "::1"
];


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
        res.status(200).send("allowed ip");
        
    } else {
        console.log(`${clientIP} attempted access and blocked`);
        res.status(400).send("IP Address not allowed");
    }
});



// server 시작
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});