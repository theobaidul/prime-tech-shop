import {
  removeFromCart,
  updateProductQuantity,
} from '@/redux/features/cart/cartSlice';
import discountPrice from '@/utils/discountPrice';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import AmountButtons from '../cart/AmountButtons';

export default function MiniCartItem({ product }) {
  const dispatch = useDispatch();
  const { id, title, price, discountPercentage, thumbnail, stock, quantity } =
    product || {};

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
    <div key={id} className="flex gap-2">
      <img
        src={thumbnail}
        alt="cartItem"
        className="size-20 object-cover object-center"
      />
      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <p>
          ${discountPrice(price, discountPercentage)} X {quantity}
        </p>
        <AmountButtons
          stock={stock}
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <div className="text-lg text-red-400 hover:text-red-600">
          <button onClick={handleRemove}>
            <RiDeleteBin5Line />
          </button>
        </div>
      </div>
    </div>
  );
}
