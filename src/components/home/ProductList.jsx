import getFilteredProducts from '@/lib/getFilteredProducts';
import { useSelector } from 'react-redux';
import ProductListLoader from '../ui/ProductListLoader';
import ProductItem from './ProductItem';
import ProductPagination from './ProductPagination';

export default function ProductList() {
  const allProducts = useSelector((state) => state?.data?.products);
  const filter = useSelector((state) => state?.filter);
  const { page, limit } = filter || {};

  const products = getFilteredProducts(allProducts, filter);

  let content;
  if (products?.length === 0) {
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
    content = <ProductListLoader />;
  }

  return (
    <div className="col-span-9 mb-6 space-y-6">
      <h1 className="text-2xl font-bold">Products</h1>
      <p>
        Showing {page * limit - limit + 1}-{page * limit} of{' '}
        {allProducts?.length} results
      </p>
      {content}
      <div className="flex items-center justify-end gap-6">
        <ProductPagination />
      </div>
    </div>
  );
}
