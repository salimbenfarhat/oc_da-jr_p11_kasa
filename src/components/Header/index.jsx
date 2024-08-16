// src/components/Header/index.jsx
import { Link } from 'react-router-dom';
import logo from '../../assets/img/LOGO_FULL.png';
import '../Header/index.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Kasa Logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__nav-link montserrat-500">Accueil</Link>
        <Link to="/a-propos" className="header__nav-link montserrat-500">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;