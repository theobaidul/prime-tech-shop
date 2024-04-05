import discountPrice from '@/utils/discountPrice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartList() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="lg:col-span-8 xl:col-span-9">
      <div className="space-y-4">
        <div className="space-y-1 rounded bg-white p-4 shadow-sm">
          <h4 className="text-base font-bold">Shipping</h4>
          <p>
            <span className="font-semibold text-gray-700">Name: </span>Md
            Obaidul islam
          </p>
          <p>
            <span className="font-semibold text-gray-700">Address: </span>
            Village: Paiksha, Post Office: Khalpar, Upazila: Nababgonj,
            District: Dhaka ,Dhaka, 1324,Bangladesh
          </p>
          <button className="!mt-4 inline-block text-primary underline">
            Edit
          </button>
        </div>
        {/* payment method */}
        <div className="space-y-1 rounded bg-white p-4 shadow-sm">
          <h4 className="text-base font-bold">Payment</h4>
          <p>
            <span className="font-semibold text-gray-700">Method: </span>Cash On
            Delivery
          </p>

          <button
            to="/payment-method"
            className="!mt-4 inline-block text-primary underline"
          >
            Edit
          </button>
        </div>
        <div className="space-y-5 rounded bg-white p-4 shadow-sm">
          {cartItems.map((item) => {
            const {
              id,
              title,
              thumbnail,
              quantity,
              price,
              discountPercentage,
            } = item;
            return (
              <div
                key={id}
                className="flex flex-wrap items-center gap-4 md:flex-nowrap md:justify-between md:gap-6"
              >
                <div className="w-32 shrink-0">
                  <img src={thumbnail} className="h-[80px]" alt="product" />
                </div>
                <div className="w-full md:w-1/3">
                  <h2 className="mb-3 text-lg font-medium xl:text-xl">
                    {title}
                  </h2>
                  <p className="font-semibold">
                    ${discountPrice(price, discountPercentage)} x {quantity}
                  </p>
                </div>
                <div className="ml-auto md:ml-0">
                  <p className="text-lg font-semibold">
                    ${discountPrice(price, discountPercentage) * quantity}
                  </p>
                </div>
              </div>
            );
          })}
          <Link
            to="/cart"
            className="!mt-4 inline-block text-primary underline"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
