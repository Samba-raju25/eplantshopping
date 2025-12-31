
# e-plantShopping

Paradise Nursery - An e-commerce platform for houseplants built with React and Redux.

## Project Overview
This is a React-based shopping cart application for an online plant shop. The application features a landing page, product listing with multiple categories, and a fully functional shopping cart with Redux state management.

## Features
- Landing page with company information and background image
- Product listing with 3+ categories (Aromatic, Medicinal, Indoor Decorative)
- 6+ plants per category with images, descriptions, and prices
- Shopping cart with add/remove functionality
- Quantity controls (increment/decrement)
- Real-time cart updates
- Dynamic cart icon with item count
- Responsive design

## Technologies Used
- React 18
- Redux Toolkit
- Vite
- CSS3

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/YOUR-USERNAME/e-plantShopping.git
cd e-plantShopping
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Build for production:
\`\`\`bash
npm run build
\`\`\`

5. Preview production build:
\`\`\`bash
npm run preview
\`\`\`

6. Deploy to GitHub Pages:
\`\`\`bash
npm run deploy
\`\`\`

## Project Structure
\`\`\`
e-plantShopping/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   ├── CartItem.jsx
│   │   └── AboutUs.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── CartSlice.jsx
│   ├── data/
│   │   └── plantsData.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## Usage
1. Click "Get Started" on the landing page
2. Browse plants by category
3. Click "Add to Cart" to add items
4. View cart by clicking the cart icon
5. Adjust quantities or remove items in cart
6. Click "Continue Shopping" to return to products
7. Click "Checkout" for checkout (Coming Soon alert)

## License
MIT