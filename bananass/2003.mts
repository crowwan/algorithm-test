import { Input, Output } from 'bananass';

const testcases = [
  {
    input: `4 2
1 1 1 1`,
    output: '3',
  },
  {
    input: `10 5
1 2 3 4 2 5 3 1 1 2`,
    output: '3',
  },
];

function solution(input: Input): Output {
  const [a, b] = input.trim().split('\n');
  const [n, m] = a.split(' ').map(Number);
  const num = b.split(' ').map(Number);
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    let res = 0;
    for (let j = i; j < n; j++) {
      res += num[j];
      if (res === m) {
        cnt += 1;
        break;
      } else if (res > m) break;
    }
  }

  return cnt;
}

export { solution, testcases };
