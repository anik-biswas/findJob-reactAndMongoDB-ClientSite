import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({category,onCategoryClick }) => {
    const {_id,name}=category;
    const handleCategoryClick = () => {
        // Call the provided click handler with the category ID
        onCategoryClick(name);
      };
    return (
        <div>
            
            <button className="btn btn-success" onClick={handleCategoryClick}>{name}</button>
        </div>
    );
};

export default Card;