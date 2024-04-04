import { Fragment, useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../context/user.context'

import { ReactComponent as Logo } from '../../assets/location-shop-online-svgrepo-com.svg';
import { signOutUser } from '../../utils/firebase.utils';
import './navbar.styles.scss';
import Button from '../../components/button/button.component';
import {ProductsContext} from '../../context/product.context'

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const { searchProducts } = useContext(ProductsContext);

  const handleSearch = () => {
    // Fetch products based on the searchQuery
    console.log('Search query:', searchQuery);
    searchProducts(searchQuery);
  };

  return (
    <Fragment>
      <div className='navigation'>
        <div>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>
        </div>
        
        <div className='search-box'>
          <input type='text' placeholder='What are you looking for?  ' className='search-input' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type='button' className='search-button'  onClick={handleSearch}>Search</button>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link'  onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;