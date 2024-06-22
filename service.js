const SerialPort = require('serialport');
const config = require('./config');

function openSerialPort() {
    const port = new SerialPort(config.serialPort, {
        baudRate: config.baudRate,
        autoOpen: false
    });

    port.open(err => {
        if (err) {
            console.error('Error opening serial port:', err.message);
            return;
        }
        console.log('Serial port opened');
    });

    port.on('data', handleData);
    port.on('error', handleError);

    return port;
}

function handleData(data) {
    console.log('Data received:', data.toString());
    // Add your data handling logic here
}

function handleError(err) {
    console.error('Serial port error:', err.message);
}

module.exports = {
    openSerialPort,
};
