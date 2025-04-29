import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";

let mainWindow;

// 定义 createWindow 函数
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = isDev ? "http://localhost:3000" : "http://localhost:3000";

  console.log("Start URL:", startUrl);
  mainWindow.loadURL(startUrl);

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
