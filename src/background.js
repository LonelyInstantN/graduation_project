'use strict'

import { app, protocol, BrowserWindow, ipcMain, dialog, Menu, } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

const path = require('path')
const remote = require('@electron/remote/main');
const fs = require('fs')
remote.initialize();

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])



async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 775,
    minHeight: 600,
    frame: false,
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION

    },
  })
  remote.enable(win.webContents);

  let template = [
    {
      label: 'File',
      submenu: [
        {
          label: '打开源文件',
          accelerator: 'CmdOrCtrl+O',
          click: () => {
            dialog.showOpenDialog({
              filters: [{ name: 'JSON Files', extensions: ['json'] }],
              properties: ['openFile']
            }).then(files => {
              if (files) {
                fs.readFile(files['filePaths'][0], 'utf8', (err, data) => {
                  if (err) console.log(err);
                  win.webContents.send('open-file', data)
                })
              }
            })
          }
        },
        {
          label: '导出翻译文件',
          accelerator: 'CmdOrCtrl+S',
          click() {
            win.webContents.send('export-translated-file')
          }
        },
        {
          type: 'separator'
        },
        {
          label: '导入项目文件',
          accelerator: 'CmdOrCtrl+Shift+O',
          click: () => {
            dialog.showOpenDialog({
              filters: [{ name: 'JSON Files', extensions: ['json'] }],
              properties: ['openFile']
            }).then(files => {
              if (files) {
                fs.readFile(files['filePaths'][0], 'utf8', (err, data) => {
                  if (err) console.log(err);
                  win.webContents.send('open-project-file', data)
                })
              }
            })
          }
        },

        {
          label: '保存项目文件',
          accelerator: 'CmdOrCtrl+Shift+S',
          click() {
            win.webContents.send('export-project-file')
          }
        },
        {
          type: 'separator'
        },
        {
          label: '导出单词表',
          accelerator: 'CmdOrCtrl+P',
          click() {
            win.webContents.send('export-wordlist-file')
          }
        },
        {
          label: '导入单词表',
          accelerator: 'CmdOrCtrl+Shift+P',
          click: () => {
            dialog.showOpenDialog({
              filters: [{ name: 'JSON Files', extensions: ['json'] }],
              properties: ['openFile']
            }).then(files => {
              if (files) {
                fs.readFile(files['filePaths'][0], 'utf8', (err, data) => {
                  if (err) console.log(err);
                  win.webContents.send('open-wordlist-file', data)
                })
              }
            })
          }
        },
        {
          type: 'separator'
        },
        {
          label:'关闭文件',
          accelerator: 'CmdOrCtrl+Q',
          click(){
            win.webContents.send('close-file')
          }
        }
      ]
    },
    {
      label:'Edit',
      submenu:[
        {
          label:'生成单词表',
          accelerator:'F1',
          click:() => {
            win.webContents.send('parse-words')
          }
        }
      ]
    }
  ]

  ipcMain.on('save-file',(event,data) => {
    console.log(event,data);
    dialog.showSaveDialog({
      title:'保存文件',
      filters: [{ name: 'JSON Files', extensions: ['json'] }],
      properties: ['saveFile']
    }).then(result => {
      console.log(data);
      console.log(result);
      fs.writeFileSync(result.filePath,data)
    }).catch(err => {
      console.log(err);
    })
  })

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
