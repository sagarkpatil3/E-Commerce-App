import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../context/user.context'

import { ReactComponent as Logo } from '../../assets/location-shop-online-svgrepo-com.svg';
import { signOutUser } from '../../utils/firebase.utils';
import './navbar.styles.scss';
import Button from '../../components/button/button.component';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <div>
          <Link className='logo-container' to='/'>
            <Logo className='logo' />
          </Link>
        </div>
        
        <div className='search-box'>
          <input type='text' placeholder='What are you looking for?  ' className='search-input' />
          <button type='button' className='search-button'>Search</button>
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