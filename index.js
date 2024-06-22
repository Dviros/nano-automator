const express = require('express');
const app = express();
const config = require('./config');
const routes = require('./routes');

app.use('/api', routes);

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Mandatory (as per the Node.js docs)
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // Optional: exit the process after logging
});
