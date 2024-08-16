// src/components/Gallery/index.jsx
import Card from '../Card';
import PropTypes from 'prop-types';
import '../Gallery/index.scss';

function Gallery({ items }) {
    return (
        <section className="gallery">
            {items.map((item) => (
                <Card
                    key={item.id} 
                    id={item.id}
                    image={item.cover}
                    title={item.title}
                />
            ))}
        </section>
    );
}

// Ajout des PropTypes pour valider les props
Gallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, // id doit être une chaîne de caractères
            cover: PropTypes.string.isRequired, // cover doit être une chaîne de caractères (URL de l'image)
            title: PropTypes.string.isRequired // title doit être une chaîne de caractères
        })
    ).isRequired // items doit être un tableau d'objets et est requis
};

export default Gallery;