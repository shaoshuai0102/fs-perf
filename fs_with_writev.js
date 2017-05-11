'use strict';

const fs = require('fs');
const os = require('os');

class CustomStream extends fs.WriteStream {
  _writev(chunks, callback) {
    console.log('chunks', chunks.length)
    const arr = chunks.map(item => item.chunk);
    this._write(Buffer.concat(arr), chunks[0].encoding, callback);
  }
}

const stream = new CustomStream(`${os.tmpdir()}/fs_with_writev.log`);

const start = Date.now();

for (let i = 0; i < 100000; i++) {
  setTimeout(() => {
    const ret = stream.write('This is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a log #' + i);
  });
}

setTimeout(() => {
  stream.end();
});

stream.on('finish', () => {
  const end = Date.now();
  console.log('Cost: %dms', end - start);
});

