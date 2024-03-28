<script lang="ts">
	import '../app.postcss';
	import '../app.scss';
	import TitleBar from '$components/titleBar/TitleBar.svelte';
    import { onMount } from 'svelte';
	import { AppShell, initializeStores, Modal, Toast, type ModalComponent } from "@skeletonlabs/skeleton";
    import FooterBar from '$components/footerBar/FooterBar.svelte';
    import SideBar from '$components/sideBar/SideBar.svelte';
    import { afterNavigate } from '$app/navigation';
    import Info from '$components/modal/info/Info.svelte';
    import { isAllowedUserStore } from '$stores/common';
    import Loading from "$components/loading/Loading.svelte";
    import Blocked from '$components/blocked/blocked.svelte';


	initializeStores();		// 스토어 init


	const modalRegistry: Record<string, ModalComponent> = {
		"info": {ref: Info}
	}


	// LifeCycle
	onMount(() => {
        // ipc 스크립트 추가
		const ipcScript = document.createElement("script");
        ipcScript.src = "/js/ipcFunction.js";
		document.head.appendChild(ipcScript);


		setTimeout(() => {
			isAllowedUserStore.setState("allowed");
		}, 5000);
	});


	afterNavigate(() => {
		// 페이지 변환 시 scroll 맨 위로
		const page = document.querySelector("#page");

		if (page !== null && page.scrollTop > 0) {
			page.scrollTo({top: 0});
		}
	});
</script>



<AppShell>
	<svelte:fragment slot="header">
		<TitleBar />
	</svelte:fragment>

	<!-- 허용된 IP인 경우 사이드바 보이도록 -->
	<svelte:fragment slot="sidebarLeft">
		{#if $isAllowedUserStore === "allowed"}
			<SideBar />
		{/if}
	</svelte:fragment>

	<!-- 허용된 IP인 경우 slot에 페이지를 바인딩 -->
	{#if $isAllowedUserStore === "allowed"}
		<div id="container">
			<slot />
		</div>

	<!-- 허용된 IP인지 확인중일 때 -->
	{:else if $isAllowedUserStore === "checking"}
		<Loading />

	<!-- 허용된 IP가 아니면 차단화면만 -->
	{:else}
		<Blocked />
	{/if}

	<svelte:fragment slot="footer">
		<FooterBar />
	</svelte:fragment>
</AppShell>


<Modal components={modalRegistry} zIndex="z-[777]"/>
<Toast />


<div class="container-line bg-surface-800-100-token container-top-line"></div>
<div class="container-line bg-surface-800-100-token container-bottom-line"></div>
<div class="container-line bg-surface-800-100-token container-left-line"></div>
<div class="container-line bg-surface-800-100-token container-right-line"></div>