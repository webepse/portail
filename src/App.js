import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';

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
              <div className="jumbotron">
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
      </>
  );
}

export default App;
