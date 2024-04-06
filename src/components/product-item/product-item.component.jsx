import './product-item.styles.scss';
import Button from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
  const { title, price, thumbnail } = product;
  const { addItemToCart } = useContext(CartContext)
  return (
    <div className='product-card-container'>
      <img src={thumbnail} alt={`${title}`} />
      <div className='footer'>
        <span className='name'>{title}</span>
        <span className='price'>Price : $ {price} </span>
      </div>
      <Button buttonType='inverted' onClick={()=> addItemToCart(product)} >Add to card</Button>
    </div>
  );
};

export default ProductCard;