import './Characteristics.css';
import camion from '../../assets/camion.png';
import container from '../../assets/container.png';
import hombres from '../../assets/hombres.png';

export const Characteristics = () => {
  return (
    <div className="characteristics-container">
      <div className="title">¿Por qué elegirnos?</div>
      <div className="characteristics">

        <div className="info-box">
          <div className="image">
            <img src={camion} alt="" />
          </div>
          <div className="text-info">
          <div className="info-title">Gestión Eficaz :</div>
            <div className="info-text">
              Nuestra virtud principal radica en una gestión logística
              excepcional. Con un enfoque metódico y preciso, coordinamos cada
              paso de la cadena de suministro, asegurando una administración
              óptima de tus productos. Nuestra experiencia en logística se
              traduce en una planificación estratégica que maximiza la
              eficiencia y minimiza los contratiempos.
            </div>
          </div>
        </div>

        <div className="info-box-reverse">
          <div className="text-info">
            <div className="info-title">Calidad Inquebrantable:</div>
            <div className="info-text">
              La calidad es el núcleo de nuestro compromiso. Cada proceso y
              servicio que ofrecemos se ejecuta con los más altos estándares de
              calidad. Nuestra dedicación a la integridad de tus productos, así
              como a la satisfacción del cliente, garantiza que nuestros
              servicios de logística cumplan y superen tus expectativas.
            </div>
          </div>
          <div className="image">
            <img src={container} alt="" />
          </div>
        </div>

        <div className="info-box">
          <div className="image">
            <img src={hombres} alt="" />
          </div>
          <div className="text-info">
            <div className="info-title">Velocidad de Entrega:</div>
            <div className="info-text">
              La velocidad de entrega es esencial en la logística moderna, y es
              una de nuestras principales virtudes. Nuestros sistemas
              optimizados y flota de camiones eficiente nos permiten garantizar
              entregas rápidas y puntuales. En un mundo donde cada minuto
              cuenta, puedes confiar en nosotros para cumplir tus plazos y
              mantener tus operaciones en movimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
