import './frontPage.css';
import { TypeAnimation } from 'react-type-animation';
import portada from '../../assets/portada.png';

export const FrontPage = () => {
  return (
    <div className="frontPage-container">
      <div className="logo">b</div>
      <div className="title-and-text">
        <TypeAnimation
          sequence={[
            2000,
            'Tecnología',
            2000,
            'Confiabilidad',
            2000,
            'Innovación',
            2000,
            'Breuk',
            4000,
          ]}
          wrapper="span"
          speed={20}
          className="title"
          repeat={Infinity}
        />
        <div className="text">
          Ofrecemos soluciones tecnológicas desde la innovación y la excelencia
          para potenciar tu empresa y llevarla al siguiente nivel. Estamos
          comprometidos con brindar un servicio de alta calidad, para que puedas
          impulsar tu empresa con confianza.
        </div>
      </div>
    </div>
  );
};
