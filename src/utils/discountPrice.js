export default function discountPrice(price, discountPercentage = 0) {
  return (price - (price * discountPercentage) / 100)?.toFixed(2);
}
