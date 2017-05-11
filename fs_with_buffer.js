'use strict';

const fs = require('fs');
const os = require('os');

let buffer = [];

class CustomStream extends fs.WriteStream {
  constructor(...args) {
    super(...args);

    this.on('drain', () => {
      console.log('drain', buffer.length)
      this.write(buffer.join(''));
      /*
      for (const content of buffer) {
        this.write(content);
      }
      */
      buffer = [];
    });
  }
}

const stream = new CustomStream(`${os.tmpdir()}/fs_with_buffer.log`);

const start = Date.now();

let canWrite = true;

for (let i = 0; i < 100000; i++) {
  setTimeout(() => {
    const text = 'This is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a logThis is a log #' + i;
    if (canWrite) {
      canWrite = stream.write(text);
    } else {
      buffer.push(text);
    }
  });
}

function end() {
  setTimeout(() => {
    if (buffer.length === 0) {
      stream.end();
    } else {
      end();
    }
  });
}

end();

setTimeout(() => {}, 10000);


stream.on('finish', () => {
  const end = Date.now();
  console.log('Cost: %dms', end - start);
});

