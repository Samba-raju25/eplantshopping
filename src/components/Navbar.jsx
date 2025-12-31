const Navbar = ({ currentPage, onNavigate, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button 
          onClick={() => onNavigate('landing')}
          className="navbar-brand"
        >
          Paradise Nursery
        </button>
        <div className="navbar-links">
          <button 
            onClick={() => onNavigate('products')}
            className={`navbar-link ${currentPage === 'products' ? 'active' : ''}`}
          >
            Plants
          </button>
          <button 
            onClick={() => onNavigate('cart')}
            className="cart-icon-container"
          >
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L7 6H3C2.44772 6 2 6.44772 2 7V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V7C22 6.44772 21.5523 6 21 6H17L15 2H9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;