import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartSummary() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart?.reduce(
    (total, item) => total + item?.price * item?.quantity,
    0
  );

  return (
    <div className="mt-6 rounded bg-white p-4 shadow-sm lg:col-span-4 lg:mt-0 xl:col-span-3">
      <h4 className="mb-4 text-lg font-medium uppercase text-gray-800">
        ORDER SUMMARY
      </h4>
      <div className="space-y-1 border-b border-gray-200 pb-3 text-gray-600">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>BDT {totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>0</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>0</p>
        </div>
      </div>
      <div className="my-3 flex justify-between font-semibold uppercase text-gray-800">
        <h4>Total</h4>
        <h4>BDT {totalPrice}</h4>
      </div>
      <Link to="/checkout" className="btn block w-full rounded-md px-3">
        Process to checkout
      </Link>
    </div>
  );
}
