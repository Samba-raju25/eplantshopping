const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <svg className="landing-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Welcome to Paradise Nursery, where green meets serenity! We are passionate about bringing 
          nature closer to you. Our extensive collection of houseplants, ranging from aromatic herbs 
          to medicinal plants, is carefully curated to enhance your living space and well-being. 
          Whether you're a seasoned gardener or just starting your green journey, we have the perfect 
          plant for you.
        </p>
        <button onClick={onGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;