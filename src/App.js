import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin/Admin';
import AllOrders from './components/AllOrders/AllOrders';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LocationDetail from './components/LocationDetail/LocationDetail';
import Login from './components/Login/Login';
import MyBookings from './components/MyBookings/MyBookings';
import Navigation from './components/Navigation/Navigation';
import NewDestination from './components/NewDestination/NewDestination';
import NoPage from './components/NoPage/NoPage';
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
            <Route path='/destinations'>
              <Destination></Destination>
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
            <Route path='*'>
              <NoPage></NoPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
