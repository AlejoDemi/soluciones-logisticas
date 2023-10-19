import './Header.css';
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">b</div>
      <div className="buttons">
        <div className="button">
          <Link
            to="nosotros"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Nosotros
          </Link>
        </div>
        <div className="button">
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Servicios
          </Link>
        </div>
        <div className="button">
          <Link
            to="contactanos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contactanos
          </Link>
        </div>
      </div>
    </div>
  );
};
