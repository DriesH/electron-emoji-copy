const electron = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
} = require('electron-devtools-installer');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // You wouldn't do this. But for now I used this, because I didn't have time
  // To setup HMR and electron build tools
  // Normally this would be index.html
  mainWindow.loadURL('http://localhost:3001');

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`added extension: ${name}`))
    .catch(err => console.error('an error occured', err));

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
