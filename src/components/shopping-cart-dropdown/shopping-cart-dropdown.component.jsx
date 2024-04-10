import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './shopping-cart-dropdown.styles.scss';

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const cartRef = useRef(null);

    const goToCheckoutHandler = () =>{
        navigate('/checkout')
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
              setIsCartOpen(false);
            }
          };
      
          document.addEventListener('click', handleClickOutside);
      
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, [setIsCartOpen])

    return (
      <div ref={cartRef} className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    );
  };

export default CartDropdown;