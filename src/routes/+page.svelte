<script lang="ts">
    import "./+page.scss";
    import Loading from "$components/loading/Loading.svelte";
    import { onMount } from "svelte";
    import { BE_SERVER, companyStore } from "$stores/common";
    import ErrorPage from "$components/errorPage/ErrorPage.svelte";
    let isComplete: "complete" | "loading" | "error" = "loading";
    let circleChartCanvas: HTMLCanvasElement;



    // LifeCycle
    onMount( async () => {
        // server에서 매출 데이터 가져오기
        await fetch(BE_SERVER + `get-order-quantity?company=${$companyStore}`)
            .then(async res => {
                if (res.status === 200) {
                    const data = await res.json();
                    console.log(data.data);



                    // todo 가져온 데이터로 차트 만들기




                    isComplete = "complete";
                    
                } else {
                    throw new Error("데이터를 정상적으로 가져오지 못했습니다.");
                }
            })
            .catch(err => {
                console.log("Error: " + err);
            });
    });
</script>




{#if isComplete === "complete"}
    <div id="home-container">
        <p id="home-title">이번 달 차트</p>

        <div id="top5-chart-container">
            <p id="top5-chart-title">⊙ TOP 5</p>


            <div id="circle-chart-box">
                <canvas id="circle-chart-canvas" bind:this={circleChartCanvas}></canvas>
            </div>


            <div id="top5-rank-box">

            </div>
        </div>
    </div>
{:else if isComplete === "loading"}
    <Loading />
{:else}
    <ErrorPage />
{/if}