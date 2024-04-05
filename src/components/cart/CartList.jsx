import { useSelector } from 'react-redux';
import NotFound from '../global/NotFound';
import CartItem from './CartItem';
export default function CartList() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="lg:col-span-8 xl:col-span-9">
      <div className="mb-4 hidden bg-gray-200 py-2 pl-12 pr-20 md:flex xl:pr-28">
        <p className="text-center text-gray-600">Product</p>
        <p className="ml-auto mr-16 text-center text-gray-600 xl:mr-24">
          Quantity
        </p>
        <p className="text-center text-gray-600">Total</p>
      </div>
      <div className="space-y-4">
        {cartItems?.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
