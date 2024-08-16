// src/components/Slideshow/index.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Slideshow/index.scss';

function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slideshow">
            {pictures.length > 1 && (
                <>
                    <button className="slideshow__arrow slideshow__arrow--left" onClick={previousSlide}>
                        
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.30583L39.96 0.22583L0.36 39.8258L39.96 79.4258L47.04 72.3458L14.52 39.8258L47.04 7.30583Z" fill="#FFFFFF"/>
                        </svg>
                    </button>
                    <button className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide}>
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="#FFFFFF"/>
                        </svg>
                    </button>
                    <div className="slideshow__counter montserrat-500">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slideshow__image" />
        </div>
    );
}

// Ajout des PropTypes pour valider les props
Slideshow.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired // `pictures` doit être un tableau de chaînes de caractères et est requis
};

export default Slideshow;
