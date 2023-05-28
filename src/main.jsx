import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import { Navbar, Footer } from './components';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';

const Main = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

export default Main;