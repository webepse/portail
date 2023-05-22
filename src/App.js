import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { societies } from './societies';
import Cards from './components/Cards';

function App() {
  const [societiesList, setsocietiesList] = useState(societies)

  const list = Object.keys(societiesList).map(iteration => {
    return (
      <Cards 
        key={iteration}
        mykey={iteration}
        nom={societiesList[iteration].title}
        logo={societiesList[iteration].logo}
        tel={societiesList[iteration].tel}
        adresse={societiesList[iteration].adresse}
        cp={societiesList[iteration].cp}
        mail={societiesList[iteration].email}
        ville={societiesList[iteration].ville}
        url={societiesList[iteration].url}
      />
    )
  })

  return (
      <>
        <div className="slide" id="home">
          <Header />
          <div className="container">
            <div className="wrapper">
              <div className="logo-info">
                Image
                <div className="date">
                  du 15/05 au 30/05 <span>2023</span>
                </div>
              </div>
              <div id="jumbotron">
                <div className="contain">
                  <h1 className="title">PROJECT PORTAIL</h1>
                  <h2>EPSE</h2>
                  <div className="texte">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, nihil!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, nihil!</p>
                  </div>
                  <a className='btn blue' href='#society'>Voir les sociétés</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide" id="societys">
          <div className="wrapper">
            <h2>Nos sociétés</h2>
            <div id="mysocietys">
             {list}
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
