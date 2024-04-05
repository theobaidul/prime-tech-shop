import Stars from '@/components/common/Stars';
import {
  storeFilterPage,
  storeFilterRatings,
} from '@/redux/features/filter/filterSlice';
import { useDispatch } from 'react-redux';

export default function Rating() {
  const dispatch = useDispatch();

  const handleRatingFilter = (value) => {
    dispatch(storeFilterRatings(value));
    dispatch(storeFilterPage(1));
  };

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Rating</h1>
      <ul className="space-y-3">
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[5]"
            id="rating[5]"
            onChange={() => handleRatingFilter(5)}
          />
          <label htmlFor="rating[5]">
            <Stars rating={5} isCount={false} />
          </label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[4]"
            id="rating[4]"
            onChange={() => handleRatingFilter(4)}
          />
          <label htmlFor="rating[4]">
            <Stars rating={4} isCount={false} />
          </label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[3]"
            id="rating[3]"
            onChange={() => handleRatingFilter(3)}
          />
          <label htmlFor="rating[3]">
            <Stars rating={3} isCount={false} />
          </label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[2]"
            id="rating[2]"
            onChange={() => handleRatingFilter(2)}
          />
          <label htmlFor="rating[2]">
            <Stars rating={2} isCount={false} />
          </label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[1]"
            id="rating[1]"
            onChange={() => handleRatingFilter(1)}
          />
          <label htmlFor="rating[1] cursor-pointer">
            <Stars rating={1} isCount={false} />
          </label>
        </li>
      </ul>
    </div>
  );
}
