// src/components/Redirect/index.jsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Redirect/index.scss';

function Redirect() {
    return (
        <>
            <Header />
            <main className="accommodation">
                <div className="redirect">
                    <h2 className="redirect__title montserrat-700">Redirection en cours...</h2>
                    <p className="redirect__message montserrat-500">Vous serez redirigé vers la page d'erreur dans quelques secondes.</p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Redirect;