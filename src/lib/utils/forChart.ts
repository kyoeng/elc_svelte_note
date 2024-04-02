import { type ChartData } from "chart.js";
import { Chart } from "chart.js/auto";



/**
 * * ChartJS에서 사용할 data 만드는 함수 *
 * @param labels 표시할 기업명 배열
 * @param label mouseover 시 나타낼 문구
 * @param data chart에 표현할 data
 * @param borderWidth 선 굵기
 * @returns Chart-Data 객체
 */
export function chartDataMaker(labels: string[], label: string, data: any, borderWidth: number) {
    return {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: borderWidth
        }]
    }
}



/**
 * * ChartJS에서 사용할 data 만드는 함수 (멀티) *
 * @param labels 표시할 안내문 배열
 * @param label mouseover 시 나타낼 문구
 * @param data chart에 표현할 data
 * @param borderWidth 선 굵기
 * @returns Chart-Data 객체
 */
export function chartDataMultiMaker(labels: string[], label: string[], data: any[], borderWidth: number) {
    // 여러개 사용 시에 반복문으로 빼기 (datasets에 들어갈 객체 생성하는 함수 만들어서)
    return {
        labels: labels,
        datasets: [
            {
                label: label[0],
                data: data[0],
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
                borderWidth: borderWidth,
                pointStyle: "circle",
                pointRadius: 10,
                pointHoverRadius: 12
            },
            {
                label: label[1],
                data: data[1],
                borderColor: 'rgba(255, 206, 86, 1)',
                fill: false,
                borderWidth: borderWidth,
                pointStyle: "circle",
                pointRadius: 10,
                pointHoverRadius: 12
            },
        ]
    }
}




/**
 * * 선형 차트 그리기 함수 *
 * @param canvas canvas 태그
 * @param chartData 차트 데이터
 * @param titleText 제목
 */
export function drawLineChart(
    canvas: HTMLCanvasElement, chartData: ChartData,
    position: "top" | "left" | "bottom" | "right", titleText: string
) {
    const ctx = canvas.getContext("2d");

    // 차트 그리기
    if (ctx !== null) {
        new Chart(ctx, {
            type: "line",
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            color: "rgba(255, 255, 255, 0.6)"
                        }
                    },
                    y: {
                        ticks: {
                            color: "rgba(255, 255, 255, 0.6)"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        align: "start",
                        text: titleText,
                        color: "rgba(255, 255, 255, 0.8)",
                        padding: 50,
                        font: {
                            size: 22,
                        }
                    }
                }
            }
        });

    // 에러 던저기
    } else {
        throw new Error();
    }
}




/**
 * * 바형 차트 그리기 함수 *
 * @param canvas canvas 태그
 * @param chartData 차트 데이터
 * @param titleText 제목
 */
export function drawBarChart(
    canvas: HTMLCanvasElement, chartData: ChartData,
    position: "top" | "left" | "bottom" | "right", titleText: string
) {
    const ctx = canvas.getContext("2d");

    // 차트 그리기
    if (ctx !== null) {
        new Chart(ctx, {
            type: "bar",
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            color: "rgba(255, 255, 255, 0.6)"
                        }
                    },
                    y: {
                        ticks: {
                            color: "rgba(255, 255, 255, 0.6)"
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        align: "start",
                        text: titleText,
                        color: "rgba(255, 255, 255, 0.8)",
                        padding: 50,
                        font: {
                            size: 22,
                        }
                    }
                }
            }
        });

    // 에러 던저기
    } else {
        throw new Error();
    }
}




/**
 * * 원형 차트 그리기 함수 *
 * @param canvas canvas 태그
 * @param chartData 차트 데이터
 * @param position legend 위치
 * @param titleText 제목
 */
export function drawCircleChart(
    canvas: HTMLCanvasElement, chartData: ChartData,
    position: "top" | "left" | "bottom" | "right", titleText: string
) {
    const ctx = canvas.getContext("2d");

    // 차트 그리기
    if (ctx !== null) {
        new Chart(ctx, {
            type: "doughnut",
            data: chartData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: position,
                        labels: {
                            color: "rgba(255, 255, 255, 0.6)",
                            padding: 30,
                            font: {
                                size: 16
                            }
                        }
                    },
                    title: {
                        display: true,
                        align: "start",
                        text: titleText,
                        color: "rgba(255, 255, 255, 0.8)",
                        padding: 50,
                        font: {
                            size: 22,
                        }
                    }
                }
            }
        });

    // 에러 던저기
    } else {
        throw new Error();
    }
}