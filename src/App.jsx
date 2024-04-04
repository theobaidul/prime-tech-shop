import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from './components/global/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
