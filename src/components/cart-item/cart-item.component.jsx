import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { thumbnail, price, title, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <img src={thumbnail} alt={`${title}`} />
      <div className='item-details'>
        <span className='title'>{title}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;