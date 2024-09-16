import React, { useState } from 'react';
import sneaks from 'sneaks-api'; // Install the sneaks-api if you haven’t
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const TryMe = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length > 2) { // Trigger API after 3 characters
      sneaks.getProducts(event.target.value, 10, (err, res) => {
        if (!err) {
          setProducts(res);
        }
      });
    } else {
      setProducts([]);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/sneaker/${productId}`);
  };

  const renderProduct = (product) => (
    <div key={product.styleID} className="search-item" onClick={() => handleProductClick(product._id)}>
      <img src={product.thumbnail} alt={product.shoeName} className="product-image" />
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <span className="product-name">{product.shoeName.replace(product.brand, '')}</span>
      </div>
    </div>
  );

  return (
    <div className="masthead">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="mx-auto my-0 text-uppercase">Welcome to the Try Me Page!</h1>
          <p>Feel free to experiment here!</p>
          
          {/* Search Bar */}
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            className="search-bar"
            placeholder="Search for sneakers..."
          />

          {/* Dropdown of Results */}
          {products.length > 0 && !showAll && (
            <div className="dropdown">
              {products.map(renderProduct)}
              <button onClick={() => setShowAll(true)} className="view-all">
                View All Results
              </button>
            </div>
          )}

          {/* If View All is clicked, show a grid of all results */}
          {showAll && (
            <div className="product-grid">
              {products.map(renderProduct)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryMe;
