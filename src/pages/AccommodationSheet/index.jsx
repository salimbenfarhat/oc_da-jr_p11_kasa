// src/pages/AccomodationSheet/index.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logements from '../../data/logements.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../../components/Error';
import Redirect from '../../components/Redirect';
import Slideshow from '../../components/Slideshow';
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import '../AccommodationSheet/index.scss';

function AccommodationSheet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find(l => l.id === id);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!logement) {
      setRedirecting(true); // Activer l'état de redirection

      const timer = setTimeout(() => {
        navigate('/erreur-404');
      }, 3000); // 3 secondes avant redirection

      return () => clearTimeout(timer); // Nettoyage du timer
    }
  }, [logement, navigate]);

  if (!logement && redirecting) {
    return (
      <Redirect />
    );
  }

  if (!logement) {
    return <Error />;
  }

  return (
    <>
        <Header />
        <main className="accommodation">
            <Slideshow pictures={logement.pictures} />
            <div className="accommodation__info">
                <div className="accommodation__details">
                    <h1 className="accommodation__title montserrat-500">{logement.title}</h1>
                    <p className="accommodation__location montserrat-500">{logement.location}</p>
                    <div className="accommodation__tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="accommodation__tag montserrat-700">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="accommodation__host">
                    <div className="accommodation__host-info">
                        <p className="accommodation__host-name montserrat-500">{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} className="accommodation__host-picture" />
                    </div>
                    <Rating rating={Number(logement.rating)} className="rating" />
                </div>
            </div>
            <div className="accommodation__collapses">
                <div className="accommodation__collapse">
                    <Collapse name="Description" content={logement.description} />
                </div>
                <div className="accommodation__collapse accommodation__collapse--right">
                    <Collapse name="Équipements" content={
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    } />
                </div>
            </div>
        </main>
        <Footer />
    </>
  );
}

export default AccommodationSheet;