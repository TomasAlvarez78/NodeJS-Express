const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first);
console.log(second);
// This is appending
writeFileSync('./content/third.txt',
            `Hello World\n${first}\nand\n${second}`,
            {flag:'a'}
            )


// This is writing
// writeFileSync('./content/third.txt',
//             `Hello World\n${first}\nand\n${second}`)
