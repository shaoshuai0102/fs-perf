'use strict';

const fs = require('fs');
const os = require('os');

const stream = fs.createWriteStream(`${os.tmpdir()}/fs.log`);

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

