const AmountButtons = ({ stock, quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex divide-x divide-gray-300 border border-gray-300 text-gray-600">
      <button
        className="flex size-5 cursor-pointer select-none items-center justify-center text-xl"
        onClick={onDecrement}
        disabled={quantity === 1}
      >
        -
      </button>
      <div className="flex h-5 w-10 items-center justify-center">
        {quantity}
      </div>
      <button
        className="flex size-5 cursor-pointer select-none items-center justify-center text-xl"
        onClick={onIncrement}
        disabled={stock === quantity}
      >
        +
      </button>
    </div>
  );
};
export default AmountButtons;
