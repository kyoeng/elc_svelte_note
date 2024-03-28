// import { app, BrowserWindow, ipcMain } from "electron";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";


// const __dirname = dirname(fileURLToPath(import.meta.url));

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");



const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1400,
    minWidth: 1400,
    height: 875,
    minHeight: 875,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  })


  // svelte를 바라보도록 설정
  mainWindow.loadURL("http://localhost:5173")


  // 최소화 이벤트
  ipcMain.on('minimizeApp', () => {
    mainWindow.minimize()
  })


  // 최대화 및 원래 사이즈 이벤트
  ipcMain.on('maximizeApp', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.restore()
    } else {
      mainWindow.maximize()
    }
  })


  // 닫기 이벤트
  ipcMain.on('closeApp', () => {
    mainWindow.close()
  })
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})