<script lang="ts">
    import "./FooterBar.scss";
    import darkModeSearch from "$assets/images/static/footer-bar/dark-mode-search.png";
    import lightModeSearch from "$assets/images/static/footer-bar/light-mode-search.png";
    import darkModeClose from "$assets/images/static/title-bar/dark-mode-close.png";
    import lightModeClose from "$assets/images/static/title-bar/light-mode-close.png";
    import darkModeAbout from "$assets/images/static/footer-bar/dark-mode-about-icon.png";
    import lightModeAbout from "$assets/images/static/footer-bar/light-mode-about-icon.png";
    import { isAllowedUserStore, screenModeStore } from "$stores/common";
    import { Drawer, getDrawerStore, type DrawerSettings, getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
    import BorderLine from "$components/borderLine/BorderLine.svelte";


    // 검색 input태그 참조
    let searchInput: HTMLInputElement;


    // Drawer 관련
    const drawerStore = getDrawerStore();
    const drawerSetting: DrawerSettings = {
        position: "bottom",
        height: "h-[200px]",
    };

    // Modal 관련
    const modalStore = getModalStore();


    /**
     * 검색 활성화 버튼 이벤트
     */
    function searchBtnEvt() {
        drawerStore.open(drawerSetting);
    }


    /**
     * 검색 닫기 버튼 이벤트
     */
    function closeBtnEvt() {
        drawerStore.close();
    }


    /**
     * 참고 팝업 버튼 이벤트
    */
    function refBtnEvt() {
        const modal: ModalSettings = {
            type: "component",
            component: "info"
        }
        modalStore.trigger(modal);
    }
</script>




<footer id="footer-bar-container" class="bg-surface-100-800-token">
    <div id="footer-bar-line" class="bg-surface-800-100-token"></div>


    {#if $isAllowedUserStore === "allowed"}
        <div id="search-btn-box" class="bg-surface-200-700-token">
            <BorderLine />

            <button id="search-on-btn" on:click={searchBtnEvt}></button>

            <p id="search-text">검색</p>
            <img src={$screenModeStore === "dark" ? darkModeSearch : lightModeSearch } alt="">
        </div>
    {/if}


    <button id="ref-btn-box" on:click={refBtnEvt}>
        <div class="search-box-line bg-surface-800-100-token line-right"></div>
        <img src={$screenModeStore === "dark" ? darkModeAbout : lightModeAbout} alt="">
    </button>
</footer>




<Drawer>
    <div id="drawer-container">
        <div id="drawer-line" class="bg-surface-800-100-token"></div>


        <div id="search-container">
            
            <input type="text" placeholder="검색할 회사명을 입력해주세요." id="search-input" class="bg-surface-200-700-token" bind:this={searchInput}>
            
            <button id="search-btn">
                <BorderLine />

                <img src={$screenModeStore === "dark" ? darkModeSearch : lightModeSearch} alt="">
            </button>
        </div>


        <div id="search-close-container">
            <div class="search-box-line bg-surface-800-100-token line-top"></div>

            <div id="search-close-btn-box" class="bg-surface-200-700-token">
                <BorderLine />

                <button id="search-close-btn" on:click={closeBtnEvt}></button>

                <p id="close-text">닫기</p>
                <img src={$screenModeStore === "dark" ? darkModeClose : lightModeClose} alt="">
            </div>
        </div>
    </div>
</Drawer>