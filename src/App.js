import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import AllOrders from './components/AllOrders/AllOrders';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LocationDetail from './components/LocationDetail/LocationDetail';
import Login from './components/Login/Login';
import MyBookings from './components/MyBookings/MyBookings';
import Navigation from './components/Navigation/Navigation';
import NewDestination from './components/NewDestination/NewDestination';
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
            <PrivateRoute path='/admin'>
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path='/mybookings'>
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path='/newdestination'>
              <NewDestination></NewDestination>
            </PrivateRoute>
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
