import React from 'react';
import './TwoProductsSection.css'; // Make sure to create this CSS file for styles

const TwoProductsSection = () => {
    return (
        <div className="two-products-section">
            <div className="product marketplace">
                <h2>Marketplace</h2>
                <p>Explore a wide range of products available in our marketplace.</p>
            </div>
            <div className="product management-program">
                <h2>Management Program</h2>
                <p>Join our management program to enhance your skills.</p>
            </div>
        </div>
    );
};

export default TwoProductsSection;