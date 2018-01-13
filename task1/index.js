const fs = require('fs');
const crypto = require('crypto');
const hash = crypto.createHash('MD5');

const readData = fs.createReadStream('./task1/input.txt').pipe(hash);
const writeData = fs.createWriteStream('./task1/output.txt');

readData.pipe(process.stdout);
readData.pipe(writeData);
