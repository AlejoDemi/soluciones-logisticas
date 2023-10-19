import { Characteristics } from '../characteristics/Characteristics';
import { Footer } from '../footer/Footer';
import { FrontPage } from '../frontPage/frontPage';
import { Header } from '../header/Header';
import { Services } from '../services/Services';
import './Layout.css';
import { Element } from 'react-scroll';

export const Layout = () => {
  return (
    <div className="Layout-container">
      <Header />
      <FrontPage />
      <Element name="nosotros">
        <Characteristics />
      </Element>
      <Element name="servicios">
        <Services />
      </Element>
      <Element name="contactanos" style={{ width: '100%' }}>
        <Footer />
      </Element>
    </div>
  );
};
