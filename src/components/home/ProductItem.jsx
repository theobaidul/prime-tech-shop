import { addToCart } from '@/redux/features/cart/cartSlice';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Stars from '../common/Stars';
import { Button } from '../ui/button';
export default function ProductItem({ product }) {
  const { id, title, price, rating, thumbnail } = product || {};
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    const findedProduct = cart?.find((item) => item?.id === id);
    if (findedProduct) {
      if (findedProduct?.stock !== findedProduct?.quantity) {
        dispatch(addToCart(product));
        toast.success(
          <div className="flex items-center gap-2">
            {title} added to cart{' '}
            <Link to="/cart">
              <Button size="sm" variant="outline">
                View cart
              </Button>
            </Link>
          </div>
        );
      } else {
        toast.error('Out of stock');
      }
    } else {
      dispatch(addToCart(product));
      toast.success(
        <div className="flex items-center gap-2">
          {title} added to cart{' '}
          <Link to="/cart">
            <Button size="sm" variant="outline">
              View cart
            </Button>
          </Link>
        </div>
      );
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
          <h5 className="mb-2 text-base font-medium tracking-tight transition hover:text-primary">
            {title}
          </h5>
        </a>
        <div>
          <Stars rating={rating} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium">BDT {price}</span>
          <button
            type="button"
            className="flex  items-center rounded-md   bg-primary px-5 py-2.5 text-center text-sm font-medium capitalize text-white transition-all"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
