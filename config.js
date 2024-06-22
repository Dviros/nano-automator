const Joi = require('joi');

const configSchema = Joi.object({
    port: Joi.number().default(3000),
    serialPort: Joi.string().required(),
    baudRate: Joi.number().default(9600),
    // Add other configurations here
});

const config = {
    port: process.env.PORT || 3000,
    serialPort: process.env.SERIAL_PORT || '/dev/tty-usbserial1',
    baudRate: process.env.BAUD_RATE || 9600,
    // Add other configurations here
};

const { error, value } = configSchema.validate(config);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = value;
