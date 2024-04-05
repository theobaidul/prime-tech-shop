import { storeFilterPage } from '@/redux/features/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductPagination() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.data?.products);
  const { page: filterPage, limit: filterLimit } = useSelector(
    (state) => state?.filter
  );

  const totalPage = Array.from(
    { length: Math.ceil(products?.length / filterLimit) },
    (_, i) => ({ id: i + 1 })
  );

  const handleNext = () => {
    dispatch(storeFilterPage(filterPage + 1));
  };
  const handlePrev = () => {
    dispatch(storeFilterPage(filterPage - 1));
  };
  const handlePage = (id) => {
    dispatch(storeFilterPage(id));
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className="btn border border-black bg-transparent px-2 py-1 text-black"
        onClick={handlePrev}
        disabled={filterPage === 1}
      >
        Prev
      </button>
      {totalPage?.map(({ id }) => (
        <button
          key={id}
          type="button"
          className="btn border border-black bg-transparent px-2 py-1 text-black"
          onClick={() => handlePage(id)}
        >
          {id}
        </button>
      ))}
      <button
        type="button"
        className="btn border border-black bg-transparent px-2 py-1 text-black"
        onClick={handleNext}
        disabled={filterPage === totalPage?.length}
      >
        Next
      </button>
    </div>
  );
}
