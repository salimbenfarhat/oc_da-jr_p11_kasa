// src/components/Footer/index.jsx
import logo from '../../assets/img/LOGO_FULL_WHITE.png';
import '../Footer/index.scss';
import { Link } from 'react-router-dom';

function Footer() {
    const year= new Date().getFullYear();
    return (
      <footer className="footer">
        <Link to="/">
          <img src={logo} alt="Kasa Logo" className="footer__logo" />
        </Link>
        <p className="footer__copyrights montserrat-500">© {year} Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;