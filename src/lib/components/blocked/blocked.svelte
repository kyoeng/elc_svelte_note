<script lang="ts">
    import "./blocked.scss";
    import darkModeAbout from "$assets/images/static/footer-bar/dark-mode-about-icon.png";
    import lightModeAbout from "$assets/images/static/footer-bar/light-mode-about-icon.png";
    import { screenModeStore } from "$stores/common";
</script>




<div id="blocked-container">
    <img src={$screenModeStore === "dark" ? darkModeAbout : lightModeAbout} alt="">
    <p id="alert-text">허용된 사용자가 아닙니다.</p>
    <p id="inquiry">
        <span>문의:</span>
        <span>010-1111-1111</span>
    </p>
</div>