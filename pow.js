function pow(x, n) {
    if (n === 0) {
      return 1;
    } else if (n < 0) {
      return 1 / pow(x, -n);
    } else {
      if (n % 2 === 0) {
        // If n is even
        const halfPower = pow(x, n / 2);
        return halfPower * halfPower;
      } else {
        // If n is odd
        return x * pow(x, n - 1);
      }
    }
  }
  
  // Example usage:
  const base = 2;
  const exponent = 3;
  const result = pow(base, exponent);
  console.log(`${base}^${exponent} = ${result}`);
  