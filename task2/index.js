const Transform = require('stream').Transform;
const fs = require('fs');
const crypto = require('crypto');
const hash = crypto.createHash('MD5');

const input = fs.createReadStream('./task2/input.txt');
const output = fs.createWriteStream('./task2/output.txt');

class CTransform extends Transform {
    constructor (options) {
        super(options);
        this.store = '';
    }

    _transform(chunk, encoding, next) {
        hash.update(chunk);
        next();
    }

    _flush(next) {
        this.store += hash.digest('hex');
        console.log(this.store);
        output.write(this.store);
        output.end;
        next();
    }
}

const st = new CTransform();

input.pipe(st).pipe(output);