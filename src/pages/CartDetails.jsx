import CartList from '@/components/cart/CartList';
import CartSummary from '@/components/cart/CartSummary';

export default function CartDetails() {
  return (
    <div className="container grid-cols-12 items-start gap-5 pb-16 pt-4 lg:grid">
      <CartList />
      <CartSummary />
    </div>
  );
}
