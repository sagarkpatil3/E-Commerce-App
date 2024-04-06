import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { title, thumbnail, price, quantity } = cartItem;


  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={thumbnail} alt={`${title}`} />
      </div>
      <span className='name'> {title} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#8722;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#x2b;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;