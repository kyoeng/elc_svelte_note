<script lang="ts">
    import "./SideBar.scss";
    import darkModeIntro from "$assets/images/static/side-bar/dark-mode-intro-icon.png";
    import lightModeIntro from "$assets/images/static/side-bar/light-mode-intro-icon.png";
    import darkModeAbout from "$assets/images/static/side-bar/dark-mode-about-icon.png";
    import lightModeAbout from "$assets/images/static/side-bar/light-mode-about-icon.png";
    import { screenModeStore } from "$stores/common";
    import { afterNavigate } from "$app/navigation";


    const pageBtnArr: HTMLElement[] = [];    // 페이지 버튼들을 담는 배열


    // LifeCycle
    afterNavigate(() => {
        for (const el of pageBtnArr) {
            if (el.classList.contains("now-page")) el.classList.remove("now-page");
        }


        switch (window.location.pathname) {
            case '/':
                pageBtnArr[0].classList.add("now-page");
                break;

            case '/about':
                pageBtnArr[1].classList.add("now-page");
                break;
        
            default:
                break;
        }
    })
</script>






<div id="side-bar-container" class="bg-surface-100-800-token">
    <div id="side-bar-line" class="bg-surface-800-100-token"></div>

    <div id="page-btn-container">
        <a href="/" class="page-btn" bind:this={pageBtnArr[0]}>
            <img src={$screenModeStore === "dark" ? darkModeIntro : lightModeIntro} alt="">
        </a>

        <a href="/about" class="page-btn" bind:this={pageBtnArr[1]}>
            <img src={$screenModeStore === "dark" ? darkModeAbout : lightModeAbout} alt="">
        </a>
    </div>
</div>