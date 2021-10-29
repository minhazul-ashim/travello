import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LocationDetail from './components/LocationDetail/LocationDetail';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/location/:id'>
            <LocationDetail></LocationDetail>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
