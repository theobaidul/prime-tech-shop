import { storeFilterCategories } from '@/redux/features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.data?.categories);

  const handleCategoryFilter = (value) => {
    dispatch(storeFilterCategories(value));
  };

  let content;
  if (categories?.length === 0) {
    content = <div>No category found</div>;
  } else if (categories?.length > 0) {
    content = categories?.map((category) => {
      const title = category?.replace('-', ' ');
      return (
        <li key={category} className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name={`category[${category}]`}
            id={category}
            onChange={() => handleCategoryFilter(category)}
          />
          <label htmlFor={category} className="capitalize">
            {title}
          </label>
        </li>
      );
    });
  }

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Category</h1>
      <ul className="space-y-3">{content}</ul>
    </div>
  );
}
