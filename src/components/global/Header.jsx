import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FiShoppingBag } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container flex items-center justify-between gap-10">
        <Link to="/" className="block w-32">
          <img src={logo} alt="logo" className="w-full" />
        </Link>
        <div className="flex w-full justify-between gap-10 md:w-3/5">
          <SearchBar />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="relative">
                <span className="absolute -top-2 left-4 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {totalItems}
                </span>
                <div className="text-2xl">
                  <FiShoppingBag />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/cart">View Cart</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/checkout">Checkout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
