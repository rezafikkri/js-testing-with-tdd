function detectTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Input must be a number');
  }

  if (a <= 0) {
    throw new Error('Input must be a positive number');
  }
  if (a + b <= c) {
    throw new Error('Input is triangle inequality violation');
  }
}

export default detectTriangle;
