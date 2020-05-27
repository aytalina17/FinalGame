const { app, BrowserWindow } = require('electron')

       function createWindow () {
           
            let win = new BrowserWindow({
              width: 1520,
              height: 722,
              webPreferences: {
                nodeIntegration: true
              }
            })
            win.removeMenu();
            win.loadFile('index.html')
    }

    app.whenReady().then(createWindow)