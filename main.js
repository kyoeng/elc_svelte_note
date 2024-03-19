import { app, BrowserWindow } from "electron";
// import path from "node:path";


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })


  mainWindow.loadURL("http://localhost:5173")

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