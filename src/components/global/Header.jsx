import logo from '@/assets/logo.png';
import { useState } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import SearchBar from './SearchBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 !z-[999] bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between gap-10">
        <Link to="/" className="block w-32">
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex w-full justify-between gap-10 md:w-3/5">
          <SearchBar />
          <div className="relative cursor-pointer" onClick={toggleDrawer}>
            <span className="absolute -top-2 left-4 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white">
              {totalItems}
            </span>
            <div className="text-2xl">
              <FiShoppingBag />
            </div>
          </div>
        </div>
      </div>
      <MiniCart isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
}
