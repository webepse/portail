import {Link} from 'react-router-dom'

const Cards = ({mykey, nom, logo, tel, adresse, cp, ville, mail, url}) => {
    return ( 
        <>
            <div className="cards">
                <img src={logo} alt={`Logo de ${nom}`} />
                <div className="infos">
                  <h3>{nom}</h3>
                  <p>{adresse}, {cp} {ville}</p>
                  <p>Téléphone: {tel}</p>
                  <p>Mail: {mail}</p>
                  <p>Site Web: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></p>
                  <Link to={`/etablissement/${mykey}`} className='button'>En savoir plus</Link>
                </div>
            </div>
        </>
     );
}
 
export default Cards;