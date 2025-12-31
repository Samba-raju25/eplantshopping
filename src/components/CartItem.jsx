import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const cost = parseFloat(item.cost.substring(1));
      return total + (cost * item.quantity);
    }, 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return (cost * item.quantity).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem(itemName));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <h1 className="cart-title">Shopping Cart</h1>
          <p className="cart-empty-text">Your cart is empty</p>
          <button
            onClick={onContinueShopping}
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-summary">
          <h2 className="cart-summary-text">
            Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          </h2>
          <h2 className="cart-total">
            Total Amount: ${calculateTotalAmount()}
          </h2>
        </div>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img 
                src={item.image} 
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Unit Price: {item.cost}</p>
                <p className="cart-item-subtotal">
                  Subtotal: ${calculateTotalCost(item)}
                </p>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.name)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-actions">
          <button
            onClick={onContinueShopping}
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleCheckoutShopping}
            className="checkout-btn"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;