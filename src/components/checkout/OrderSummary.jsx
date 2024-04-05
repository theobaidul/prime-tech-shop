import discountPrice from '@/utils/discountPrice';
import { useSelector } from 'react-redux';
export default function OrderSummary() {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart
    ?.reduce(
      (total, item) =>
        total +
        discountPrice(item?.price, item?.discountPercentage) * item?.quantity,
      0
    )
    ?.toFixed(2);

  return (
    <div className="mt-6 rounded bg-white p-4 shadow-sm lg:col-span-4 lg:mt-0 xl:col-span-3">
      <h4 className="mb-4 text-lg font-medium uppercase text-gray-800">
        ORDER SUMMARY
      </h4>
      <div className="space-y-1 border-b border-gray-200 pb-3 text-gray-600">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>${totalPrice}</p>
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
        <h4>${totalPrice}</h4>
      </div>
      <button className="btn flex w-full items-center justify-center rounded-md px-3 capitalize">
        Place order
      </button>
    </div>
  );
}
