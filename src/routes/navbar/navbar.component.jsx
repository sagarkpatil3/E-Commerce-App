import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// import { UserContext } from '../../contexts/user.context';

import { ReactComponent as Logo } from '../../assets/location-shop-online-svgrepo-com.svg';

import './navbar.styles.scss';

const Navbar = () => {
//   const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/auth'>
              SIGN IN
          </Link>
            <span className='nav-link'>
              SIGN OUT
            </span>
         
          {/* {currentUser ? (
            <span className='nav-link'>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )} */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;