import { motion } from 'framer-motion';
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
            <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
            scale: 0.8,
            rotate: -60,
            borderRadius: "100%"
        }}
        >
            <button className="btn btn-success" onClick={handleCategoryClick}>{name}</button>
            </motion.div>
        </div>
    );
};

export default Card;