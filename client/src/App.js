import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.sass';

function App () {
  return (
    <div className={styles.layout}>
      <Router>
        <Header />
        <Switch>
          <main className={styles.main}>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/pet/create'>
              <CreatePetPage />
            </Route>
            <Route path='/pets'>
              <PetsListPage />
            </Route>
          </main>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
