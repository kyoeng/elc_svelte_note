const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");


const app = express();


// server 설정
dotenv.config({path: ".env.dev"})
app.use(cors());


// server를 이용 가능한 ip인지 확인하는 미들웨어 함수



// mysql 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


// mysql 연결 확인 api
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL database: " + err.stack);
        return;
    }

    console.log("Connected to MySQL database as id " + connection.threadId);
});



app.get("/api", (req, res) => {

});



// server 시작
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});