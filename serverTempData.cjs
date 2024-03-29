// 임시 허용 ip 배열 (나중에 DB로 옮길 예정)
const allowedIPs = [
    "127.0.0.1",
    "192.168.123.110",
    "::1"
];


const company = {
    "::1": "(주)우범컴퍼니"
};


const orderQuantity = {
    "::1": [
        {
            company: "나라금속",
            quantity: 153
        },
        {
            company: "동우산업기계",
            quantity: 143
        },
        {
            company: "용신금속",
            quantity: 50
        },
        {
            company: "아일기계",
            quantity: 210
        },
        {
            company: "형제철강",
            quantity: 263
        },
    ]
}





module.exports = {
    allowedIPs,
    company,
    orderQuantity
}