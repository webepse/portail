import Header from "../components/Header";
import Footer from "../components/Footer";
import { societies } from "../societies";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";

const SocietyPage = (props) => {
    let {name} = useParams()
    const [society, setSociety] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        if(!societies[name])
        {
            navigate('/error', {replace: true})
        }else{
            setSociety(societies[name])
        }
    }, [])
    
    return ( 
        <>
            <div className="slide" id="society">
                <Header />
                <div className="banner">
                    <h1>{society.nom}</h1>
                </div>
                <div className="wrapper">
                    <div className="society-logo">
                        <img src={society.logo} alt={`Logo de ${society.nom}`} />
                    </div>
                    <div className="society-info">
                        <div className="title">Informations</div>
                        <div className="adresse">{society.adresse} - {society.cp} {society.ville}</div>
                        <div className="tel">Téléphone: {society.tel}</div>
                        <div className="mail">Mail: {society.email}</div>
                        <div className="description" dangerouslySetInnerHTML={{__html: society.description}}></div>
                        <div className="site">Site Web: <a href={society.url} target="_blank" rel="nooepener noreferrer">{society.url}</a></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default SocietyPage;