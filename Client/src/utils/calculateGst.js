export function calculateGst(amount) {
  const gstAmount = amount * (18 / 100);

  return gstAmount.toFixed(2);
}
