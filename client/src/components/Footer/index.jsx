import React from 'react';
import styles from './Footer.module.sass';

function Footer () {
  return (
    <footer className={styles.footer}>
      <p> 2025 Animal Search. All rights reserved.</p>
      <p>
        <a href='/privacy'>Privacy Policy</a> |<a href='/terms'>Terms of Use</a>
      </p>
    </footer>
  );
}

export default Footer;
