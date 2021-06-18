import {React, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  const [route, setRoute] = useState('home');

  const onClick = (page) =>{
    setRoute(page)
  }

  const pages = (route) => {
    switch(route){
      case 'home':
        return <Header />;      
      case 'projects':
        return <Projects /> ;
      case 'aboutme':
        return <h1>aboutme</h1>;  
      case 'contact':
        return <h1>contact</h1>;  
      default:
        return <h1>home</h1>;
    }
  }
  console.log(route);

  return (
    <div>
      <Navbar click={onClick} />
      {
        pages(route)
      }
      <Footer />
    </div>
  );
}

export default App;
