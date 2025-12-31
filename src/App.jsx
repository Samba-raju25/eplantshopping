import { useState } from 'react';
import { useSelector } from 'react-redux';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleGetStarted = () => {
    setCurrentPage('products');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
  };

  return (
    <div>
      {currentPage !== 'landing' && (
        <Navbar 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          cartCount={cartCount}
        />
      )}
      
      {currentPage === 'landing' && <LandingPage onGetStarted={handleGetStarted} />}
      {currentPage === 'products' && <ProductList />}
      {currentPage === 'cart' && <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
}

export default App;
