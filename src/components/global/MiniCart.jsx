import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MiniCartItem from './MiniCartItem';
import NotFound from './NotFound';

export default function MiniCart({ isOpen, toggleDrawer }) {
  const cartItems = useSelector((state) => state.cart);

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right" size={350}>
      <div className="flex h-full flex-col justify-between p-2">
        <div className="space-y-2">
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => (
              <MiniCartItem key={item?.id} product={item} />
            ))
          ) : (
            <NotFound />
          )}
        </div>
        <div className="flex gap-2">
          <Link
            to="/cart"
            className="btn w-1/2 border border-black bg-transparent text-black"
            onClick={toggleDrawer}
          >
            View Cart
          </Link>
          <Link to="/checkout" className="btn w-1/2" onClick={toggleDrawer}>
            Checkout
          </Link>
        </div>
      </div>
    </Drawer>
  );
}
