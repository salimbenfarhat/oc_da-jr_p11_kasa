// src/pages/About/index.jsx
import Header from '../../components/Header';
import BANNER_ABOUT from '../../assets/img/BANNER_ABOUT.png';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Collapse from '../../components/Collapse';
import contentData from '../../data/content.json';


function About() {
  return (
    <>
      <Header />
      <main className="about">
          <Banner img={BANNER_ABOUT} altimg="About" title="" />
          <section className="collapses">
              {contentData.map((item, index) => (
                  <Collapse key={index} name={item.name} content={item.content} />
              ))}
          </section>
      </main>
      <Footer />
    </>
  );
}
  
export default About;