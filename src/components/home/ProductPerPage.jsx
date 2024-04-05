import {
  storeFilterLimit,
  storeFilterPage,
} from '@/redux/features/filter/filterSlice';
import { useDispatch } from 'react-redux';

export default function ProductPerPage({ limit }) {
  const dispatch = useDispatch();

  const handleLimitChange = (e) => {
    dispatch(storeFilterLimit(e?.target?.value));
    dispatch(storeFilterPage(1));
  };

  return (
    <div>
      <select
        value={limit}
        onChange={handleLimitChange}
        className="rounded-md border border-black p-1"
      >
        <option value="12">12</option>
        <option value="15">15</option>
        <option value="18">18</option>
        <option value="21">21</option>
        <option value="24">24</option>
      </select>
    </div>
  );
}
