<script lang="ts">
    import "./TitleBar.scss";
    import darkModeLogo from "$assets/images/static/title-bar/dark-mode-logo.png";
    import lightModeLogo from "$assets/images/static/title-bar/light-mode-logo.png";
    import darkModeMinimize from "$assets/images/static/title-bar/dark-mode-minimize.png";
    import lightModeMinimize from "$assets/images/static/title-bar/light-mode-minimize.png";
    import darkModeWide from "$assets/images/static/title-bar/dark-mode-wide.png";
    import lightModeWide from "$assets/images/static/title-bar/light-mode-wide.png";
    import darkModeClose from "$assets/images/static/title-bar/dark-mode-close.png";
    import lightModeClose from "$assets/images/static/title-bar/light-mode-close.png";
    import { screenModeStore } from "$stores/common";
    import { LightSwitch, setModeCurrent } from "@skeletonlabs/skeleton";
    import { onDestroy, onMount } from "svelte";


    let modeMenuBtn: HTMLElement;       // 모드 팝업 버튼
    let modePopup: HTMLElement;         // 모드 팝업



    function modeMenuLogic(flag: boolean): void {
        // classList에 select가 있을 때
        if (flag) {
            modeMenuBtn.classList.remove("select");
            modePopup.classList.remove("popup-on");
            modePopup.classList.add("popup-off");
            
        // classList에 select가 없을 때
        } else {
            modeMenuBtn.classList.add("select");
            modePopup.classList.remove("popup-off");
            modePopup.classList.add("popup-on");
        }
    }


    /**
     * mode 버튼 클릭 이벤트
     * @param e MouseEvent
     */
    function menuClickEvt(e: MouseEvent): void {
        e.stopPropagation();
        const tg = e.target as HTMLElement;

        // classList에 menu가 없을 때
        if (!tg.classList.contains("menu")) return;

        // modeMenuLogic() 호출
        modeMenuLogic(tg.classList.contains("select"));
    }


    /**
     * body에 적용될 클릭 이벤트 (메뉴 닫기를 위함)
     */
    function bodyClickEvt(): void {
        modeMenuLogic(true);
    }


    /**
     * 스크린모드 스위치에 대한 클릭 이벤트
     */
    function switchEvt(e: MouseEvent): void {
        e.stopPropagation();
        
        // 로컬스토리지 활용
        const beforeScreenMode = localStorage.getItem("screenMode");
        const afterScreenMode = beforeScreenMode === "dark" ? "light" : "dark";
        setModeCurrent(afterScreenMode === "dark" ? false : true);
        screenModeStore.changeMode(afterScreenMode);
        localStorage.setItem("screenMode", afterScreenMode);
    }


    // LifeCycle
    onMount(() => {
        // 스크린모드에 대한 처리
        const screenMode = localStorage.getItem("screenMode");
        if (screenMode !== null && (screenMode === "dark" || screenMode === "light")) {
            screenModeStore.changeMode(screenMode);
            setModeCurrent(screenMode === "dark" ? false : true);
        } else {
            localStorage.setItem("screenMode", "dark");
            screenModeStore.changeMode("dark");
            setModeCurrent(false);
        }


        // body에 이벤트 등록
        document.body.addEventListener("click", bodyClickEvt);
        modePopup.addEventListener("click", (e) => e.stopPropagation());
	});
    
    
    onDestroy(() => {
        // body에 이벤트 해제
        document.body.removeEventListener("click", bodyClickEvt);
        modePopup.removeEventListener("click", (e) => e.stopPropagation());
    });
</script>







<header id="title-bar-container" class="bg-surface-100-800-token">
    <div id="title-bar-line" class="bg-surface-800-100-token"></div>

    <h1 id="title-bar-logo">
        ELC_SVELTE_NOTE
        <img src={$screenModeStore === "dark" ? darkModeLogo : lightModeLogo} alt="logo">
    </h1>


    <div id="title-bar-left-menu-box">
        <button class="menu" bind:this={modeMenuBtn} on:click={menuClickEvt}>Mode</button>

        <div id="mode-box" class="bg-surface-100-800-token popup-off" bind:this={modePopup}>
            <p id="mode-text">현재 : {$screenModeStore === "dark" ? "다크" : "라이트"}모드</p>
            <LightSwitch on:click={switchEvt}/>
        </div>
    </div>

    
    <div id="drag-element"></div>


    <div id="title-bar-right-btn-box">
        <div class="window-btn window-size-btn" id="window-minimize-btn">
            <img src={$screenModeStore === "dark" ? darkModeMinimize : lightModeMinimize} alt="minimize" style="scale: 0.5;">
        </div>

        <div class="window-btn window-size-btn" id="window-wide-btn">
            <img src={$screenModeStore === "dark" ? darkModeWide : lightModeWide} alt="minimize" style="scale: 0.4;">
        </div>

        <div class="window-btn" id="window-close-btn">
            <img src={$screenModeStore === "dark" ? darkModeClose : lightModeClose} alt="minimize" style="scale: 0.4;">
        </div>
    </div>
</header>