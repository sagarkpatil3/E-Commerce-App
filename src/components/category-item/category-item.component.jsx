import './category-item.styles.scss';
import { ProductsContext } from '../../context/product.context';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const { getProductsFromCategory } = useContext(ProductsContext);
  // const [categoryItem, setCategoryItem] = useState('');
  const navigate = useNavigate();
  const handleSearch = (categoryItem) => {
    getProductsFromCategory(categoryItem);
    navigate('/shop')
  };

  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p onClick={() => handleSearch(title)}>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;