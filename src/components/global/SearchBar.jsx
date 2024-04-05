import useDebounce from '@/hooks/useDebounce';
import { useLazySearchProductsQuery } from '@/redux/features/products/productsApi';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchItem from './SearchItem';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const debounce = useDebounce();
  const [searchProducts, { data, isError, error }] =
    useLazySearchProductsQuery();
  const { products } = data || {};

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const trimedValue = event?.target?.value?.trim();
    debounce(() => searchProducts(trimedValue));
  };

  let content;
  if (isError) {
    content = <div>{error?.data?.message}</div>;
  } else if (products?.length === 0) {
    content = <div>No products found</div>;
  } else if (products?.length > 0) {
    content = products?.map((product) => (
      <SearchItem key={product?.id} product={product} />
    ));
  } else {
    content = <div>Loading...</div>;
  }

  useEffect(() => {
    setSearchTerm('');
  }, [location.key]);

  return (
    <div className="relative w-96">
      <input
        type="search"
        placeholder="Search products..."
        className="w-full max-w-96 rounded-md border px-2 py-1 outline-none"
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm?.trim() && (
        <div className="absolute top-14 min-h-20 w-full space-y-4 rounded-lg bg-gray-100 p-4">
          {content}
        </div>
      )}
    </div>
  );
}
