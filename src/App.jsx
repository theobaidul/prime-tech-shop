import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from './components/global/Header';
import { useGetDataQuery } from './redux/features/data/dataApi';

function App() {
  useGetDataQuery();

  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
