import { useGetProductsQuery } from '@/redux/features/products/productsApi';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import ProductPagination from './ProductPagination';
import ProductPerPage from './ProductPerPage';

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams?.get('page')) || 1);
  const [limit, setLimit] = useState(Number(searchParams?.get('limit')) || 12);
  const query = `skip=${page * limit - limit}&limit=${limit}`;
  const { data, isError, error } = useGetProductsQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  const { products, total } = data || {};

  const handleLimitChange = (limitValue) => {
    setPage(1);
    setLimit(limitValue);
  };

  let content;
  if (isError) {
    content = <div>{error?.data?.message}</div>;
  } else if (products?.length === 0) {
    content = <div>No products found</div>;
  } else if (products?.length > 0) {
    content = (
      <div className="mb-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <ProductItem key={product?.id} product={product} />
        ))}
      </div>
    );
  } else {
    content = <div>Loading...</div>;
  }

  return (
    <div className="mb-6 flex-1 space-y-6">
      <h1 className="text-2xl font-bold">Shop</h1>
      <p>
        Showing {page * limit - limit + 1}-{page * limit} of {total} results
      </p>
      {content}
      <div className="flex items-center justify-end gap-6">
        <ProductPerPage
          onLimitChange={handleLimitChange}
          currentLimit={limit}
        />
        <ProductPagination
          currentPage={page}
          limit={limit}
          total={total}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
