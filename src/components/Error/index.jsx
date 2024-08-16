// src/components/Error/index.jsx
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Error/index.scss';

function Error() {
    return (
        <>
            <Header />
            <main className="error">
                <h1 className="error__code montserrat-700">404</h1>
                <p className="error__message montserrat-500">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error__link montserrat-500">Retourner sur la page d'accueil</Link>
            </main>
            <Footer />
        </>
    );
}

export default Error;