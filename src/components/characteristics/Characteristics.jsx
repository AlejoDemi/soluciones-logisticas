import './Characteristics.css';
import avatar from '../../assets/avatar.png';

export const Characteristics = () => {
  return (
    <div className="characteristics-container">
      <div className="title-image">
        <div className="title">Quiénes somos</div>
        <div className="image-container">
          <img src={avatar} alt="foto" />
        </div>
      </div>
      <div className="characteristics">
        <div className="info-box">
          <div className="info-title">Análisis y Consultoría:</div>
          <div className="info-text">
            Analizamos tu empresa en profundidad para entender tus necesidades y
            recomendarte las soluciones tecnológicas más apropiadas. Nuestros
            consultores altamente capacitados te guiarán en cada paso del
            proceso.
          </div>
        </div>
        <div className="info-box">
          <div className="info-title">Desarrollo e Implementación:</div>
          <div className="info-text">
            Desarrollamos soluciones a medida que se adaptan a tu empresa y la
            impulsan hacia el éxito. Nos encargamos de la implementación
            eficiente y efectiva para que puedas disfrutar de los beneficios
            rápidamente.
          </div>
        </div>
        <div className="info-box">
          <div className="info-title">Soporte Postventa:</div>
          <div className="info-text">
            Nuestro compromiso no termina con la implementación. Ofrecemos un
            soporte postventa dedicado y eficaz para asegurarnos de que tu
            solución tecnológica funcione de manera óptima y esté alineada con
            tus objetivos.
          </div>
        </div>
      </div>
    </div>
  );
};
