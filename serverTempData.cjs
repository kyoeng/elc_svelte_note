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
            company: "(주)나라금속",
            thisMonthQuantity: 153,                  // 이번 달
            last3MonthQuantity: [140, 163, 210],     // 지난 3개월 [3개월전, 2개월전, 한달전] 순서
            lastYear4MonthQ: [110, 134, 183, 211]    // 작년 4개월 [3개월전, 2개월전, 한달전, 이달] 순서
        },
        {
            company: "(주)동우산업기계",
            thisMonthQuantity: 143,
            last3MonthQuantity: [136, 204, 311],
            lastYear4MonthQ: [100, 241, 211, 180]
        },
        {
            company: "(주)용신금속",
            thisMonthQuantity: 50,
            last3MonthQuantity: [105, 78, 68],
            lastYear4MonthQ: [67, 93, 77, 86]
        },
        {
            company: "(주)아일기계",
            thisMonthQuantity: 210,
            last3MonthQuantity: [222, 157, 111],
            lastYear4MonthQ: [231, 197, 177, 215]
        },
        {
            company: "(주)창호금속",
            thisMonthQuantity: 3,
            last3MonthQuantity: [17, 67, 88],
            lastYear4MonthQ: [51, 67, 110, 34]
        },
        {
            company: "(주)형제철강",
            thisMonthQuantity: 310,
            last3MonthQuantity: [403, 674, 512],
            lastYear4MonthQ: [299, 713, 689, 415]
        },
        {
            company: "(주)이랜텍",
            thisMonthQuantity: 102,
            last3MonthQuantity: [135, 130, 87],
            lastYear4MonthQ: [310, 241, 198, 207]
        },
        {
            company: "(주)화낙",
            thisMonthQuantity: 109,
            last3MonthQuantity: [67, 63, 154],
            lastYear4MonthQ: [21, 81, 77, 106]
        },
        {
            company: "(주)화인",
            thisMonthQuantity: 63,
            last3MonthQuantity: [78, 91, 37],
            lastYear4MonthQ: [56, 76, 107, 120]
        },
        {
            company: "(주)고려에스티",
            thisMonthQuantity: 222,
            last3MonthQuantity: [310, 199, 275],
            lastYear4MonthQ: [153, 294, 187, 249]
        },
        {
            company: "(주)동일",
            thisMonthQuantity: 18,
            last3MonthQuantity: [68, 138, 84],
            lastYear4MonthQ: [52, 84, 93, 117]
        },
    ]
}





module.exports = {
    allowedIPs,
    company,
    orderQuantity
}