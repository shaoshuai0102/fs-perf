'use strict';

const fs = require('fs');
const os = require('os');

class CustomStream extends fs.WriteStream {
  constructor(...args) {
    super(...args);

    this.cork();
    setTimeout(() => {
      this.uncork();
      this.cork();
    }, 1000);
  }
}

const stream = new CustomStream(`${os.tmpdir()}/fs_with_cork.log`);

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

