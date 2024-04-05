// import useDebounce from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
// import SearchItem from './SearchItem';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  // const debounce = useDebounce();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // const trimedValue = event?.target?.value?.trim();
    // // debounce(() => searchProducts(trimedValue));
  };

  let content = null;
  // if (products?.length === 0) {
  //   content = <div>No products found</div>;
  // } else if (products?.length > 0) {
  //   content = products?.map((product) => (
  //     <SearchItem key={product?.id} product={product} />
  //   ));
  // } else {
  //   content = <div>Loading...</div>;
  // }

  useEffect(() => {
    setSearchTerm('');
  }, [location.key]);

  return (
    <div className="relative w-96">
      <IoSearchSharp className="absolute left-1 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        placeholder="Search products..."
        className="w-full max-w-96 rounded-md border px-2 py-1 pl-6 outline-none"
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
