const { ipcRenderer, contextBridge } = require("electron");




contextBridge.exposeInMainWorld("ipc", {
    minimizeApp: () => {
        ipcRenderer.send("minimizeApp");
    },
    maximizeApp: () => {
        ipcRenderer.send("maximizeApp");
    },
    closeApp: () => {
        ipcRenderer.send("closeApp");
    }
})