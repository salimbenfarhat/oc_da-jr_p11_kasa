// src/components/Header/index.jsx
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/img/LOGO_FULL.png';
import '../Header/index.scss';

function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} className="header__logo" alt="Kasa Logo" />
      </Link>
      <nav className="header__nav">
        <Link
          to="/"
          className={`header__nav-link montserrat-500 ${location.pathname === '/' ? 'active' : ''}`}
        >Accueil</Link>
        <Link
          to="/a-propos"
          className={`header__nav-link montserrat-500 ${location.pathname === '/a-propos' ? 'active' : ''}`}
        >A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;