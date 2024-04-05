import {
  storeFilterBrands,
  storeFilterPage,
} from '@/redux/features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Brand() {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state?.data?.brands);

  const handleCategoryFilter = (value) => {
    dispatch(storeFilterBrands(value));
    dispatch(storeFilterPage(1));
  };

  let content;
  if (brands?.length === 0) {
    content = <div>No brands found</div>;
  } else if (brands?.length > 0) {
    content = brands?.map((brand) => {
      const title = brand?.replace('-', ' ');
      return (
        <li key={brand} className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name={`brand[${brand}]`}
            id={brand}
            onChange={() => handleCategoryFilter(brand)}
          />
          <label htmlFor={brand} className="capitalize">
            {title}
          </label>
        </li>
      );
    });
  }

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Brand</h1>
      <ul className="space-y-3">{content}</ul>
    </div>
  );
}
