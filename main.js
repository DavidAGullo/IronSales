const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')
const createWindow = () => {
   const win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      frame: true,
      resizable:true,
      show: true,
      center: true,
      icon: path.join(__dirname, 'assets\icons\icon64x64.png'),
      backgroundColor: '#312450',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      }
    })
  
    win.loadFile('index.html')
  }

// Language: javascript
// Path: IronSales\my-electron-app\index.html

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
app.setUserTasks([
  {
    program: process.execPath,
    arguments: '--new-window',
    iconPath: process.execPath,
    iconIndex: 0,
    title: 'New Window',
    description: 'Create a new window'
  }
])



