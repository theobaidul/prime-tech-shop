import CartList from '@/components/checkout/CartList';
import OrderSummary from '@/components/checkout/OrderSummary';

export default function Checkout() {
  return (
    <div className="grid-cols-12 items-start gap-6 pb-16 pt-4 lg:grid">
      <CartList />
      <OrderSummary />
    </div>
  );
}
