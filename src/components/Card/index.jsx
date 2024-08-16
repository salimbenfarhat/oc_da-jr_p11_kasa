// src/components/Card/index.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Card/index.scss';

function Card({ id, image, title }) {
    return (
        <Link to={`/fiche-logement/${id}`} className="card">
            <figure>
                <img src={image} alt={title} className="card__img" />
                <figcaption className="card__title montserrat-700">{title}</figcaption>
            </figure>
        </Link>
    );
}

// Ajout des PropTypes pour valider les props
Card.propTypes = {
    id: PropTypes.string.isRequired, // `id` doit être une chaîne de caractères et est requis
    image: PropTypes.string.isRequired, // `image` doit être une chaîne de caractères (URL) et est requis
    title: PropTypes.string.isRequired // `title` doit être une chaîne de caractères et est requis
};

export default Card;