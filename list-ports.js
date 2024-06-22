const SerialPort = require('serialport');

SerialPort.list()
  .then(ports => {
    if (ports.length === 0) {
      console.log('No serial ports found.');
    } else {
      ports.forEach(port => {
        console.log(`Port: ${port.path}, Manufacturer: ${port.manufacturer || 'Unknown'}, Serial Number: ${port.serialNumber || 'Unknown'}`);
      });
    }
  })
  .catch(err => {
    console.error('Error listing serial ports:', err.message);
  });
