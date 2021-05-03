require('dotenv').config()
const murall = require('@murall/museum');
const _ = require('lodash');

const saveDir = process.env.BILLY_JACK_SAVE_DIR;
const options = {
    isLayer2: true,
    save: true,
    filename: process.env.BILLY_JACK_FILENAME,
    saveDir,
    fromBlock: 13114875
};

async function main() {
    const start = process.env.BILLY_JACK_START;
    const end = process.env.BILLY_JACK_END;
    try {
        await murall.applyStateChanges(start, end, options);
    } catch (err) {
        console.warn(`Failure applying murall state changes!`);
        console.error(err);
    }
}

main();