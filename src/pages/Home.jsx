import FilterSection from '@/components/home/FilterSection';
import ProductList from '@/components/home/ProductList';

export default function Dashboard() {
  return (
    <div className="container mt-5 grid grid-cols-12 gap-5">
      <FilterSection />
      <ProductList />
    </div>
  );
}
