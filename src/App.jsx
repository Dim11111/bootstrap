import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Slider from './components/Slider';
import CardItem from './components/cart/CardItem';
import Footer from './components/Footer';
import Description from './components/Description';
import { useState} from 'react';

function App() {

  const [tyrs, setTyrs] = useState([])

fetch('https://643477f6582420e2317cdf67.mockapi.io/tyrs').then(
  (myJson) => {
    return myJson.json();
  }).then((myJson)=>{
    setTyrs(myJson);
  })

  return (
    <div>
      <Header/>
      <Slider/>
      <Description/>
      <CardItem item={tyrs}/>
      <Footer/>
    </div>
  );
}

export default App;
