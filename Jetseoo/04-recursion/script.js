const pow = (num, exp) => {
  return (exp === 1) ? num : num * pow(num, (exp - 1))
}