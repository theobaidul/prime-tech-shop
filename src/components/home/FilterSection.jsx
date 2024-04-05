import Brand from './filters/Brand';
import Category from './filters/Category';
import Price from './filters/Price';
import Rating from './filters/Rating';

export default function FilterSection() {
  return (
    <div className="col-span-3 space-y-5">
      <Rating />
      <Category />
      <Brand />
      <Price />
    </div>
  );
}
