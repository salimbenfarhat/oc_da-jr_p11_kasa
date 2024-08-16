import { useState } from 'react';
import PropTypes from 'prop-types';
import '../Collapse/index.scss';

function Collapse({ name, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse__header montserrat-700" onClick={toggleCollapse}>
                {name}
                <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="#FFFFFF"/>
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="collapse__content montserrat-400">
                    {typeof content === 'string' ? (
                        <p>{content}</p>
                    ) : (
                        content
                    )}
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
};

export default Collapse;