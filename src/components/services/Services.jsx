import './Services.css';
import caja from '../../assets/caja-icon.png';
import casa from '../../assets/casa-icon.png';
import mundo from '../../assets/mundo-icon.png';
import camion from '../../assets/camion-icon.png';

export const Services = () => {
  return (
    <div className="services-container">
      <div className="title">Somos la solución que necesitás.</div>
      <div className="services">
        <div className="service-horizontal">
          <div className="service-box">
            <div className="service-logo">
              <img src={caja} alt="logo" />
            </div>
            <div className="service-title">E-commerce</div>
            <div className="service-text">
              Nuestro servicio de e-commerce está diseñado para llevar tu
              negocio en línea al siguiente nivel. Gestionamos todos los
              aspectos de la logística de tu tienda en línea, desde el
              almacenamiento de inventario hasta la entrega puntual,
              garantizando que tus productos lleguen a tus clientes de manera
              eficiente y segura.
            </div>
          </div>

          <div className="service-box">
            <div className="service-logo">
              <img src={casa} alt="logo" />
            </div>
            <div className="service-title">Warehousing</div>
            <div className="service-text">
              Nuestro servicio de warehousing se enfoca en la gestión experta de
              tus productos. Ofrecemos soluciones de almacenamiento seguras y
              eficaces que aseguran la disponibilidad de tus productos cuando
              más los necesitas. Con nuestras instalaciones de almacenamiento de
              alta calidad, puedes confiar en la integridad de tu inventario.
            </div>
          </div>
        </div>
        <div className="service-horizontal">
          <div className="service-box">
            <div className="service-logo">
              <img src={mundo} alt="logo" />
            </div>
            <div className="service-title">Comercio Exterior</div>
            <div className="service-text">
              El comercio exterior puede ser un desafío, pero lo hacemos simple
              para ti. Nuestros servicios de comercio exterior abarcan la
              gestión de documentos, el despacho aduanero y la coordinación de
              envíos internacionales. Te ayudamos a navegar por las
              complejidades de las operaciones internacionales de manera
              eficiente.
            </div>
          </div>
          <div className="service-box">
            <div className="service-logo">
              <img src={camion} alt="logo" />
            </div>
            <div className="service-title">Transporte y Distribución</div>
            <div className="service-text">
              Nuestro servicio de transporte y distribución se basa en la
              velocidad y la eficiencia. Con una flota de camiones moderna y una
              gestión precisa, garantizamos la entrega oportuna de tus productos
              a destinos locales y nacionales. Tu carga estará en buenas manos
              en cada etapa del viaje.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
