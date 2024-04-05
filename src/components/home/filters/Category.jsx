import { useGetCategoryQuery } from '@/redux/features/category/categoryApi';

export default function Category() {
  const { data, isError, error } = useGetCategoryQuery();

  let content;
  if (isError) {
    content = <div>{error?.data?.message}</div>;
  } else if (data?.length === 0) {
    content = <div>No category found</div>;
  } else if (data?.length > 0) {
    content = data?.map((item) => (
      <li key={item} className="flex flex-row items-center gap-2">
        <input type="checkbox" name={`category[${item}]`} id={item} />
        <label htmlFor={item}>{item}</label>
      </li>
    ));
  } else {
    content = <div>Loading...</div>;
  }

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Category</h1>
      <ul className="space-y-3">{content}</ul>
    </div>
  );
}
