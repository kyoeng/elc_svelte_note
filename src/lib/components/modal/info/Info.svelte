<script lang="ts">
    import "./Info.scss";
    import darkModeLogo from "$assets/images/static/title-bar/dark-mode-logo.png";
    import lightModeLogo from "$assets/images/static/title-bar/light-mode-logo.png";
    import darkModeMinimize from "$assets/images/static/title-bar/dark-mode-minimize.png";
    import lightModeMinimize from "$assets/images/static/title-bar/light-mode-minimize.png";
    import darkModeWide from "$assets/images/static/title-bar/dark-mode-wide.png";
    import lightModeWide from "$assets/images/static/title-bar/light-mode-wide.png";
    import darkModeClose from "$assets/images/static/title-bar/dark-mode-close.png";
    import lightModeClose from "$assets/images/static/title-bar/light-mode-close.png";
    import darkModeSearch from "$assets/images/static/footer-bar/dark-mode-search.png";
    import lightModeSearch from "$assets/images/static/footer-bar/light-mode-search.png";
    import darkModeAbout from "$assets/images/static/footer-bar/dark-mode-about-icon.png";
    import lightModeAbout from "$assets/images/static/footer-bar/light-mode-about-icon.png";
    import darkModeHome from "$assets/images/static/side-bar/dark-mode-home.png";
    import lightModeHome from "$assets/images/static/side-bar/light-mode-home.png";
    import checkImg from "$assets/images/static/footer-bar/check.png";
    import { screenModeStore } from "$stores/common";
    import { type SvelteComponent } from "svelte";
    import BorderLine from "$components/borderLine/BorderLine.svelte";


    export let parent: SvelteComponent;
</script>




<div id="info-container" class="bg-surface-100-800-token">
    <BorderLine />


    <div id="info-title-box">
        <img src={$screenModeStore === "dark" ? darkModeAbout : lightModeAbout} alt="">
        <p id="app-info">해당 앱은 상업적 목적으로 만들어진 앱이 아닙니다.</p>
    </div>


    <div id="img-ref-container">
        <p id="img-ref-title">
            이미지 출처<br>
            https://www.flaticon.com/kr/free-icons/-
        </p>


        <div id="img-info-box">
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeLogo : lightModeLogo} alt="">
                <p>쓰기 아이콘  제작자: smashingstocks - Flaticon</p>
            </div>
                            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeClose : lightModeClose} alt="">
                <p>닫기 버튼 아이콘  제작자: inkubators - Flaticon</p>
            </div>
            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeWide : lightModeWide} alt="">
                <p>크게 하다 아이콘  제작자: Tempo_doloe - Flaticon</p>
            </div>
            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeMinimize : lightModeMinimize} alt="">
                <p>최소화 아이콘  제작자: Enamo Studios - Flaticon</p>
            </div>
            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeAbout : lightModeAbout} alt="">
                <p>우리에 대해 아이콘  제작자: Daniela Paim - Flaticon</p>
            </div>
            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeSearch : lightModeSearch} alt="">
                <p>검색 아이콘 제작자: Freepik - Flaticon</p>
            </div>
            
            <div class="img-info">
                <img src={$screenModeStore === "dark" ? darkModeHome : lightModeHome} alt="">
                <p>홈 버튼 아이콘 제작자: Ilham Fitrotul Hayat - Flaticon</p>
            </div>

            <div class="img-info">
                <img src={checkImg} alt="">
                <p>체크 아이콘 제작자: Ian June - Flaticon</p>
            </div>
        </div>
    </div>

    
    <button id="info-modal-close" on:click={parent.onClose}>
        <BorderLine />
        Close
    </button>
</div>