import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function Price() {
  const [priceRage, setPriceRage] = useState([50, 1000]);

  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Price</h1>
      <RangeSlider
        min={50}
        max={1000}
        value={priceRage}
        onInput={(currentValue) => setPriceRage(currentValue)}
      />
      <p>
        Price: ${priceRage[0]} - ${priceRage[1]}
      </p>
    </div>
  );
}
