const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true
    },
    icon: path.join(__dirname, 'images', 'icon.png') // opcional: si tenés ícono
  });

  // Carga el archivo HTML principal (teoremas.html, por ejemplo)
  win.loadFile('index.html');

  // Opcional: abrir las dev tools
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
