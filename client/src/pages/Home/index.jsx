import React from 'react';
import styles from './Home.module.sass';
import { Link } from 'react-router-dom';
import RunningCat from '../../components/RunningCat';

function Home () {
  return (
    <section className={styles.home}>
      <div className={styles.text}>
        <h1>Lost or found a pet?</h1>
        <p>We’ll help you reunite with your furry friend</p>
        <div className={styles.buttons}>
          <Link to='/pet/create' className={styles.btnPrimary}>
            Report Lost Pet
          </Link>
          <Link to='/pets' className={styles.btnSecondary}>
            View Found Pets
          </Link>
        </div>
      </div>
      <RunningCat />
    </section>
  );
}

export default Home;
