import blankStar from '@/assets/icons/blankStar.svg';
import fullStar from '@/assets/icons/fullStar.svg';
import halfStar from '@/assets/icons/halfStar.svg';

const Stars = ({ rating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="cursor-pointer text-base text-primary">
        {rating > number ? (
          <img src={fullStar} alt="" className="size-3" />
        ) : rating > index ? (
          <img src={halfStar} alt="" className="size-3" />
        ) : (
          <img src={blankStar} alt="" className="size-3" />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">
        {tempStars}{' '}
        <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Stars;
