import {
  storeFilterMaxPrice,
  storeFilterMinPrice,
  storeFilterPage,
} from '@/redux/features/filter/filterSlice';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Price() {
  const dispatch = useDispatch();
  const { minPrice, maxPrice } = useSelector((state) => state?.data);
  const { minPrice: filterMinPrice, maxPrice: filterMaxPrice } = useSelector(
    (state) => state?.filter
  );

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Price</h1>
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        value={[filterMinPrice, filterMaxPrice]}
        onInput={(currentValue) => {
          dispatch(storeFilterMinPrice(currentValue[0]));
          dispatch(storeFilterMaxPrice(currentValue[1]));
          dispatch(storeFilterPage(1));
        }}
      />
      <p>
        Price: ${filterMinPrice} - ${filterMaxPrice}
      </p>
    </div>
  );
}
