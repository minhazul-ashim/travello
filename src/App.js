import './App.css';
import Banner from './components/Banner/Banner';
import Destination from './components/Destination/Destination';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <Destination></Destination>
      <Footer></Footer>
    </div>
  );
}

export default App;
