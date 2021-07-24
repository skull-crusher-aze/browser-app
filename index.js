const electron = require('electron')
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width:1000,height:800, icon:"icon.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes:true
    }))

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    Menu.setApplicationMenu(mainMenu);
})

const mainMenuTemplate = [
    {
        label:'Exit',
        click(){
            app.quit();
        }
    }
]