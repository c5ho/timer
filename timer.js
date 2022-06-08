const args = process.argv;

let times = []
for (let num of args) {
  if (num >= 0 && num != NaN) {
    times.push(num*1000);
  };
};
times = times.sort((a,b) => a - b);

for (let time of times) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
};



