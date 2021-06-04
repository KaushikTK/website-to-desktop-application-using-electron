const { app, BrowserWindow, screen } = require('electron')

function createWindow (w,h) {
  // it has a lot of different options => https://www.electronjs.org/docs/latest/api/browser-window/
  const win = new BrowserWindow({
    width: w,
    height: h,
  })

  // enter the url of your website
  const URL = `https://www.electronjs.org/`;
  win.loadURL(URL);
}

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize // get screen size
  createWindow(width, height);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})