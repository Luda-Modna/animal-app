import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.sass';

function Header () {
  return (
    <nav className={styles.header}>
      <a href='/'>
        <img className={styles.logo} src='/images/logo.jpg' alt='logo' />
      </a>
      <ul className={styles.navList}>
          <li className={styles.items}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.items}>
            <Link to='/pet/create'>Add Pet</Link>
          </li>
          <li className={styles.items}>
            <Link to='/pets'>Pet List</Link>
          </li>
      </ul>
    </nav>
  );
}

export default Header;
