import {
  removeFromCart,
  updateProductQuantity,
} from '@/redux/features/cart/cartSlice';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import AmountButtons from './AmountButtons';

export default function CartItem({ product }) {
  const { id, title, price, thumbnail, quantity, stock } = product || {};
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateProductQuantity({ id, quantity: quantity + 1 }));
  };
  const handleDecrement = () => {
    dispatch(updateProductQuantity({ id, quantity: quantity - 1 }));
  };
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex flex-wrap items-center gap-4 rounded bg-white p-4 shadow-sm md:flex-nowrap md:justify-between md:gap-6">
      <div className="w-32 shrink-0">
        <img src={thumbnail} className="h-[80px]" alt="" />
      </div>
      <div className="w-full md:w-1/3">
        <h2 className="mb-3 text-lg font-medium xl:text-xl">{title}</h2>
        <p className="font-semibold">
          BDT {price} x {quantity}
        </p>
      </div>
      <AmountButtons
        stock={stock}
        quantity={quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <div className="ml-auto md:ml-0">
        <p className="text-lg font-semibold">BDT {quantity * price}</p>
      </div>
      <div className="text-lg text-red-400 hover:text-red-600">
        <button onClick={handleRemove}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}
