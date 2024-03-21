<script lang="ts">
	import '../app.postcss';
	import '../app.scss';
	import TitleBar from '$components/titleBar/TitleBar.svelte';
    import { onMount } from 'svelte';
	import { AppShell, initializeStores } from "@skeletonlabs/skeleton";
    import FooterBar from '$components/footerBar/FooterBar.svelte';
    import SideBar from '$components/sideBar/SideBar.svelte';


	initializeStores();


	// LifeCycle
	onMount(() => {
        // ipc 스크립트 추가
		const ipcScript = document.createElement("script");
        ipcScript.src = "/js/ipcFunction.js";
		document.head.appendChild(ipcScript);
	});
</script>



<AppShell>
	<svelte:fragment slot="header">
		<TitleBar />
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<SideBar />
	</svelte:fragment>

	<div id="container">
		<slot />
	</div>

	<svelte:fragment slot="footer">
		<FooterBar />
	</svelte:fragment>
</AppShell>


<div class="container-line bg-surface-800-100-token" id="container-top-line"></div>
<div class="container-line bg-surface-800-100-token" id="container-bottom-line"></div>
<div class="container-line bg-surface-800-100-token" id="container-left-line"></div>
<div class="container-line bg-surface-800-100-token" id="container-right-line"></div>