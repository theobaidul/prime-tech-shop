import discountPrice from '@/utils/discountPrice';
import { Link } from 'react-router-dom';
import Stars from '../common/Stars';

export default function SearchItem({ product }) {
  const { id, title, price, discountPercentage, rating, thumbnail } =
    product || {};

  return (
    <Link to={`/products/${id}`}>
      <div className="mt-2 flex gap-4">
        <img
          src={thumbnail}
          alt="result"
          className="size-14 object-cover object-center"
        />
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="text-xs text-gray-500">
            {discountPrice(price, discountPercentage)}
          </p>
          <Stars rating={rating} />
        </div>
      </div>
    </Link>
  );
}
