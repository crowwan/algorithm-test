import { Input, Output } from 'bananass';

const testcases = [
  {
    input: `7 7
8
1`,
    output: '0',
  },
  {
    input: `7 7
8
10`,
    output: '1',
  },
];

function solution(input: Input): Output {
  const [a, b, c] = input.trim().split('\n');
  const [a0, a1] = a.split(' ').map(s => Number(s));
  const fn = (n: number) => a0 * n + a1;
  const gn = (n: number) => n;

  if (a0 <= Number(b) && fn(Number(c)) <= Number(b) * gn(Number(c))) return 1;
  return 0;
}

export { solution, testcases };
