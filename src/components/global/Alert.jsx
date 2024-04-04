const Alert = ({ type = 'success', children, className }) => {
  return (
    <div
      className={`max-w-[600px] rounded-[4px] px-4 py-3 ${
        type === 'danger'
          ? 'bg-red-500/20 text-red-500'
          : 'bg-green-600/20 text-green-600'
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default Alert;
