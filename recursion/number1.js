function fib(num) {
  if (num === 1) {
    return 1;
  }

  return num * fib(num - 1);
}

console.log(fib(4));