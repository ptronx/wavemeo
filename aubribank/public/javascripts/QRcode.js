const QRCode = require('qrcode');

/*QRCode.toDataURL("Hola mundo", function (err, url) {
    imagedata = url;
    console.log(imagedata)
})*/

QRCode.toString('http://www.google.com', function (err, string) {
    if (err) throw err
    console.log(string)
})
