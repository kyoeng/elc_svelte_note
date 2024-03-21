const titleBar = document.getElementById("title-bar-container");            // 타이블바
const minimizeBtn = document.getElementById("window-minimize-btn");         // 최소화 버튼
const wideBtn = document.getElementById("window-wide-btn");                 // 최대화 버튼
const closeBtn = document.getElementById("window-close-btn");               // 종료 버튼





// minimizeBtn 이벤트
minimizeBtn.addEventListener("mousedown", e => e.stopPropagation());
minimizeBtn.addEventListener("mousemove", e => e.stopPropagation());
minimizeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.ipc.minimizeApp();
});


// wideBtn 이벤트
wideBtn.addEventListener("mousedown", e => e.stopPropagation());
wideBtn.addEventListener("mousemove", e => e.stopPropagation());
wideBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.ipc.maximizeApp();
});


// closeBtn 이벤트
closeBtn.addEventListener("mousedown", e => e.stopPropagation());
closeBtn.addEventListener("mousemove", e => e.stopPropagation());
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    window.ipc.closeApp();
});