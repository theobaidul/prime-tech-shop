import Stars from '@/components/common/Stars';
import SingleProductLoader from '@/components/ui/SingleProductLoader';
import { addToCart } from '@/redux/features/cart/cartSlice';
import discountPrice from '@/utils/discountPrice';
import numberWithCommas from '@/utils/numberWithcommas';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function ProductDetails() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const params = useParams();
  const data = {};
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    thumbnail,
  } = data || {};

  const handleAddToCart = () => {
    const findedProduct = cart?.find((item) => item?.id === id);
    const addProduct = () => {
      dispatch(addToCart(data));
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

  let content;
  if (data && data?.title) {
    content = (
      <>
        <section className="overflow-hidden bg-white text-gray-700">
          <div className="container  py-24">
            <div className="mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="w-full rounded border border-gray-200 object-cover object-center p-4 lg:w-2/5"
                src={thumbnail}
              />
              <div className="mt-6 w-full lg:mt-0 lg:w-3/5 lg:py-6 lg:pl-10">
                <h1 className="mb-4 text-3xl font-medium text-gray-900">
                  {title}
                </h1>
                <div className="mb-4">
                  <Stars rating={rating} />
                </div>
                <p className="mb-4 leading-relaxed">{description}</p>
                <div className="space-y-4">
                  <span className="text-2xl font-medium text-gray-900">
                    <span className="text-gray-400 line-through">${price}</span>{' '}
                    $
                    {numberWithCommas(discountPrice(price, discountPercentage))}
                  </span>
                  <div className="flex space-x-4">
                    <button className="btn" onClick={handleAddToCart}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 flex items-center space-x-8">
              <div className={`border-b-2 border-b-orange-300 pb-1`}>
                Description
              </div>
            </div>
            <div className="max-w-[600px]">{description}</div>
          </div>
        </section>
      </>
    );
  } else {
    content = (
      <div className="container py-24">
        <SingleProductLoader />
      </div>
    );
  }
  return <div>{content}</div>;
}
