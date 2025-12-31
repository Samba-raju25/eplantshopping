import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import { plantsArray } from '../data/plantsData';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart(prev => ({ ...prev, [product.name]: true }));
  };

  return (
    <div className="product-container">
      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h1 className="category-title">{category.category}</h1>
          <div className="product-grid">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="product-card">
                <img 
                  src={plant.image}
                  alt={plant.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <p className="product-cost">{plant.cost}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                    className={`add-to-cart-btn ${
                      addedToCart[plant.name] ? 'disabled' : 'active'
                    }`}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;