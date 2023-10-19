import './Services.css';
import consultoria from '../../assets/consultoria.png';
import seguridad from '../../assets/seguridad.png';
import gestion from '../../assets/gestion.png';

export const Services = () => {
  return (
    <div className="services-container">
      <div className="title">
        Nos gusta resolver problemas, por eso ofrecemos consultoría
      </div>
      <div className="services">
        <div className="service-box">
          <div className="service-logo">
            <img src={seguridad} alt="logo" />
          </div>
          <div className="service-title">Seguridad y compliance</div>
          <div className="service-text">
            Protege tus datos y cumple con los requisitos legales. Nuestros
            servicios de seguridad y cumplimiento normativo fortalecen la
            integridad de tu negocio en el mundo digital.
          </div>
        </div>

        <div className="service-box">
          <div className="service-logo">
            <img src={consultoria} alt="logo" />
          </div>
          <div className="service-title">Consultoría digital</div>
          <div className="service-text">
            Nuestra consultoría digital te ayuda a optimizar tu estrategia en
            línea. Obtén orientación experta para transformar tu presencia
            digital y mejorar la experiencia de tus usuarios.
          </div>
        </div>

        <div className="service-box">
          <div className="service-logo">
            <img src={gestion} alt="logo" />
          </div>
          <div className="service-title">Gestión de proyectos</div>
          <div className="service-text">
            Aseguramos el éxito en tus proyectos tecnológicos. Desde la
            planificación hasta la ejecución, optimizamos recursos y tiempos
            para lograr resultados excepcionales. Seguimos el camino para
            llevarte al proximo nivel.
          </div>
        </div>
      </div>
    </div>
  );
};
