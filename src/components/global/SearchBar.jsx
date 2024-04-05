import { useEffect, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import SearchItem from './SearchItem';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const products = useSelector((state) => state?.data?.products);
  const location = useLocation();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filterProducts = products?.filter((product) => {
    return product?.title
      ?.trim()
      ?.toLowerCase()
      .includes(searchTerm?.trim()?.toLowerCase());
  });

  let content = null;
  if (filterProducts?.length === 0) {
    content = <NotFound />;
  } else if (filterProducts?.length > 0) {
    content = filterProducts?.map((product) => (
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
