'use strict';

const fs = require('fs');
const os = require('os');

const stream = fs.createWriteStream(`${os.tmpdir()}/fs_with_one_big_string.log`);

const start = Date.now();

const arr = [];
for (let i = 0; i < 100000; i++) {
  setTimeout(() => {
    arr.push('This is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a log #' + i);
  });
}

stream.write(arr.join(''));

setTimeout(() => {
  stream.end();
});

stream.on('finish', () => {
  const end = Date.now();
  console.log('Cost: %dms', end - start);
});

