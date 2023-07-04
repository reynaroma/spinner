const animation = ['|   ', '/   ', '-   ', '\\    ', '|   ', '/   ', '-   ', '\\    ', '|   ']
let ms = 100;
for (const sym of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${sym}`)
  }, ms);
  ms += 200;
};
setTimeout(() => {
  process.stdout.write('\n');
}, ms);