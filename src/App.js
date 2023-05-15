import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

function App() {
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
              <div className="cards">
                <img src='' alt="image" />
                <div className="infos">
                  <h3>Nom</h3>
                  <p>Adresse, CP Ville</p>
                  <p>Téléphone: 02/25.35.45</p>
                  <p>Mail: contact@epse.be</p>
                  <p>Site Web: <a href='http://www.epse.be' target="_blank" rel="noopener noreferrer">EPSE</a></p>
                  <Link to='/' className='button'>En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
