import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LocationDetail from './components/LocationDetail/LocationDetail';
import Login from './components/Login/Login';
import MyBookings from './components/MyBookings/MyBookings';
import Navigation from './components/Navigation/Navigation';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/mybookings'>
              <MyBookings></MyBookings>
            </Route>
            <PrivateRoute path='/location/:id'>
              <LocationDetail></LocationDetail>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
