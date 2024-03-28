<script lang="ts">
    import "./SideBar.scss";
    import darkModeHome from "$assets/images/static/side-bar/dark-mode-home.png";
    import lightModeHome from "$assets/images/static/side-bar/light-mode-home.png";
    import { screenModeStore } from "$stores/common";
    import { afterNavigate } from "$app/navigation";
    import { onMount } from "svelte";


    let mainBtn: HTMLElement;    // 메인 화면 버튼


    // LifeCycle
    onMount(() => {
        mainBtn.classList.add("now-page");
    });


    afterNavigate(() => {
        switch (window.location.pathname) {
            case '/':
                mainBtn.classList.add("now-page");
                break;
        
            default:
                break;
        }
    })
</script>






<div id="side-bar-container" class="bg-surface-100-800-token">
    <div id="side-bar-line" class="bg-surface-800-100-token"></div>

    <div id="page-btn-container">
        <a href="/" class="page-btn" bind:this={mainBtn}>
            <img src={$screenModeStore === "dark" ? darkModeHome : lightModeHome} alt="" style="scale: 0.8;">
        </a>
    </div>
</div>