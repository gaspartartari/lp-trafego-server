
import './styles.css';

const CardText = () => {
  return (
    <section className="lp-main-text fadeInUp">
      <div className='lp-container'>
        <h1>TRANSFORME O SEU NEGÓCIO </h1>
        <h2>Com <strong>Experts</strong> em Makreting Digital </h2>
        <p>15 anos ajudando empresas do comércio eletrônico <br /> a crescer por meio de estratégias baseadas em dados.</p>
      </div>
      <div className='lp-main-text-sbtn-container'>
        <a href="https://calendly.com/gaspartartari" target="_blank" rel="noopener noreferrer">
          <button
            onClick={() => {
              (window as any).dataLayer.push({ 'event': 'schedule_button' });
            }}
            className='lp-main-text-sbtn'>Agende sua consulta gratuíta
          </button>
        </a>
      </div>
    </section>
  );
};

export default CardText;
