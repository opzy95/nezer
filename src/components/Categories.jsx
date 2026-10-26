import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import './Categories.css';

function Categories() {
  const navigate = useNavigate();

  const handleExplore = (categoryName) => {
    const categoryPaths = {
      kitchen: '/kitchen',
      appliances: '/appliances',
      gadgets: '/shop',
      'food and cereals': '/shop',
    };

    navigate(categoryPaths[categoryName.toLowerCase()]);
  };

  return (
    <section className="categories">
      <div className="categories-wrapper">
        <motion.div
          className="categories-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Explore the HomePro Collection</h2>
          <p>Everyday essentials for your kitchen, home, and table.</p>
        </motion.div>

        <motion.div
          className="categories-grid"
        >
          {data.categories.map((category) => (
            <motion.div
              key={category.name}
              className="category-card"
              whileHover={{ y: -10 }}
            >
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <button className="explore-btn" onClick={() => handleExplore(category.name)}>
                    Explore
                  </button>
                </div>
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories;