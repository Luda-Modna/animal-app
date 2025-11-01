import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreatePetPage from './pages/CreatePetPage';
import PetsListPage from './pages/PetsListPage';

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pet/create'>Add Pet</Link>
          </li>
          <li>
            <Link to='/pets'>Pet List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact>
          Home
        </Route>
        <Route path='/pet/create'>
          <CreatePetPage />
        </Route>
        <Route path='/pets'>
          <PetsListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
