import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useSelector } from 'react-redux';

export default function MiniCart({ isOpen, toggleDrawer }) {
  const cartItems = useSelector((state) => state.cart);

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
      {cartItems?.map((item) => (
        <div key={item.id} className="flex gap-2">
          <img src={item?.thumbnail} alt="cartItem" className="size-32" />
          <div className="flex flex-col gap-1">
            <p>{item?.title}</p>
            <p>
              ${item?.quantity} X ${item?.price}
            </p>
          </div>
        </div>
      ))}
    </Drawer>
  );
}
