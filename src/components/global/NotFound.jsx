export default function NotFound({ message }) {
  return (
    <div className="w-full bg-gray-100 p-4">{message || 'No Items Found'}</div>
  );
}
