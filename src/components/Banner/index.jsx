// src/components/Banner/index.jsx
import PropTypes from 'prop-types';
import '../Banner/index.scss';

function Banner({ img, title, altimg }) {
  return (
    <section className="banner">
      <img src={img} alt={`Kasa ${altimg} Banner`} className="banner__img" />
      {title && <h1 className="banner__title montserrat-700">{title}</h1>}
    </section>
  );
}
  
Banner.propTypes = {
  img: PropTypes.string.isRequired, // `img` doit être une chaîne de caractères (URL) et est requis
  title: PropTypes.string, // `title` est optionnel mais doit être une chaîne de caractères s'il est fourni
  altimg: PropTypes.string.isRequired, // `altimg` doit être une chaîne de caractères et est requis
};

export default Banner;