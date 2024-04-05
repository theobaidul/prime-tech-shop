import { addToCart } from '@/redux/features/cart/cartSlice';
import discountPrice from '@/utils/discountPrice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stars from '../common/Stars';
export default function ProductItem({ product }) {
  const { id, title, price, discountPercentage, rating, thumbnail } =
    product || {};
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    const findedProduct = cart?.find((item) => item?.id === id);
    const addProduct = () => {
      dispatch(addToCart(product));
      toast.success(
        <div className="flex items-center gap-2">
          {title} added to cart{' '}
          <Link
            to="/cart"
            className="cursor-pointer rounded-md border border-gray-50 bg-gray-100 px-2 py-1 hover:bg-gray-200"
          >
            View cart
          </Link>
        </div>
      );
    };
    if (findedProduct) {
      if (findedProduct?.stock !== findedProduct?.quantity) {
        addProduct();
      } else {
        toast.error('Out of stock');
      }
    } else {
      addProduct();
    }
  };

  return (
    <div className="rounded-md bg-white shadow-md">
      <Link to={`/products/${id}`} className="flex items-center justify-center">
        <img
          className="h-[200px] rounded-t-lg p-8"
          src={thumbnail}
          alt="productimage"
        />
      </Link>
      <div className="px-5 pb-5">
        <a href="/products/id">
          <h5 className="mb-2 text-base font-medium tracking-tight transition">
            {title}
          </h5>
        </a>
        <div>
          <Stars rating={rating} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium">
            <span className="text-gray-400 line-through">${price}</span> $
            {discountPrice(price, discountPercentage)}
          </span>
          <button
            type="button"
            className="btn flex items-center rounded-md px-5 py-2.5 text-center text-sm font-medium capitalize text-white transition-all"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
