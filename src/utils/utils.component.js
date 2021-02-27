export function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}
export function priceRow(qty, rate, disc) {
  return qty * rate - (qty * rate * disc) / 100;
}
export function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}
