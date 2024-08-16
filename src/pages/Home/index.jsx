// src/pages/Home/index.jsx
import logements from '../../data/logements.json';
import Header from '../../components/Header';
import BANNER_HOME from '../../assets/img/BANNER_HOME.png';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Banner img={BANNER_HOME} altimg="Home" title="Chez vous, partout et ailleurs" />
        <Gallery items={logements} />
      </main>
      <Footer />
    </>
  )
}
  
export default Home;