import './product-item.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({ product }) => {
  const { title, price, thumbnail } = product;
  return (
    <div className='product-card-container'>
      <img src={thumbnail} alt={`${title}`} />
      <div className='footer'>
        <span className='name'>{title}</span>
        <span className='price'>Price : $ {price} </span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  );
};

export default ProductCard;