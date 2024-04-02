<script lang="ts">
    import "./+page.scss";
    import Loading from "$components/loading/Loading.svelte";
    import { onMount } from "svelte";
    import { BE_SERVER, companyStore } from "$stores/common";
    import ErrorPage from "$components/errorPage/ErrorPage.svelte";
    import { chartDataMaker, drawCircleChart, drawBarChart, chartDataMultiMaker, drawLineChart } from "$utils/forChart";



    let isComplete: "complete" | "loading" | "error" = "loading";
    let top5ChartCanvas: HTMLCanvasElement;
    let lastMonthComparisonChartCanvas: HTMLCanvasElement;
    let lastYearComparisonChartCanvas: HTMLCanvasElement;



    // LifeCycle
    onMount( async () => {
        // server에서 매출 데이터 가져오기
        await fetch(BE_SERVER + `get-order-quantity?company=${$companyStore}`)
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json();

                    // 원형 차트
                    const top5company = [];
                    const top5qua = [];

                    for (let i = 0; i < 5; i++) {
                        const dt = data.total[i];
                        top5company.push(dt.company);
                        top5qua.push(dt.thisMonthQuantity);
                    }

                    const top5chartData = chartDataMaker(top5company, "이달의 판매량", top5qua, 2);
                    drawCircleChart(top5ChartCanvas, top5chartData, "left", "이번 달 TOP5");

                    // 바형 차트
                    const lastMonthComparisonChartData = chartDataMaker(["3개월 전", "2개월 전", "지난 달", "이번 달"], "", [data.last3MonthArr[0], data.last3MonthArr[1], data.last3MonthArr[2], data.thisMonth], 2);
                    drawBarChart(lastMonthComparisonChartCanvas, lastMonthComparisonChartData, "left", "지난 3개월과 비교");

                    // 선형 차트
                    const lastYearComparisonChartData = chartDataMultiMaker(["3개월 전", "2개월 전", "1개월 전", "이번 달"], ["#작년", "#올해"], [data.lastYearLast4MonthArr, [data.last3MonthArr[0], data.last3MonthArr[1], data.last3MonthArr[2], data.thisMonth]], 1);
                    drawLineChart(lastYearComparisonChartCanvas, lastYearComparisonChartData, "top", "작년과 비교");

                    isComplete = "complete";
                    
                } else {
                    throw new Error("서버에서 데이터를 정상적으로 가져오지 못했습니다.");
                }
            })
            .catch(err => {
                console.log(err);
            });
    });
</script>




{#if isComplete === "error"}
    <ErrorPage />
{:else}
    {#if isComplete === "loading"}
        <Loading />
    {/if}

    <div id="home-container">
        <div id="charts-container">
            <div id="top5-box">
                <canvas bind:this={top5ChartCanvas}></canvas>
            </div>

            <div id="comparison-box">
                <canvas bind:this={lastMonthComparisonChartCanvas}></canvas>
                <canvas bind:this={lastYearComparisonChartCanvas}></canvas>
            </div>
        </div>
    </div>
{/if}