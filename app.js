var fs = require('fs');
var https = require('https');
const httpsOptions = {
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}
var express = require('express');
var app = express();

const PiCamera = require('pi-camera');
const FPS = 1;
var last_pic = "";

const myCamera = new PiCamera({
    mode: 'photo',
    width: 640,
    height: 480,
    nopreview: true,
});

myCamera.snapDataUrl()
    .then((result) => {
        last_pic = result;
    })
    .catch((error) => {
    });
app.get("/live", (req, res) => {

    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(fs.readFileSync('./index.html')));
})

app.get("/data", (req, res) => {

    res.send(last_pic);
})

app.get("/", (req, res) => {
    res.send('<img src="' + last_pic + '">');
})
var httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(443, () => { console.log("Server is on") });
var io = require('socket.io')(httpsServer);


setInterval(() => {
    myCamera.snapDataUrl()
        .then((result) => {
            last_pic = result;
            io.emit('image', result);
        })
        .catch((error) => {
        });



}, 1000 / FPS)