const { exec } = require('child_process');
const AUTOHOTKEY_PATH = '"C:\Program Files\AutoHotkey\UX\AutoHotkeyUX.exe"';

const autoKey = (key) => {
    const command = `${AUTOHOTKEY_PATH} ${key}`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing AutoHotkey command: ${command}`, err);
            return;
        }
        console.log(`AutoHotkey command output: ${stdout}`);
    });
};

const copy = () => {
    const script = 'Send ^c'; // AutoHotkey script for Ctrl+C
    const command = `${AUTOHOTKEY_PATH} ${script}`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing AutoHotkey copy command: ${command}`, err);
            return;
        }
        console.log(`AutoHotkey copy command output: ${stdout}`);
    });
};

const paste = () => {
    const script = 'Send ^v'; // AutoHotkey script for Ctrl+V
    const command = `${AUTOHOTKEY_PATH} ${script}`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error executing AutoHotkey paste command: ${command}`, err);
            return;
        }
        console.log(`AutoHotkey paste command output: ${stdout}`);
    });
};

module.exports = { autoKey, copy, paste };
