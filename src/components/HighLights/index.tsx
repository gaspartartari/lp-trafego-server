
import './styles.css';

export default function Highlights() {
    return (
        <section className='lp-highlights'>
            <div className='lp-container'>
                <h2>Por que escolher nossos serviços?</h2>
                <div className='lp-highlights-grid'>
                    <div className='lp-highlight'>
                        <h3>Profissionalismo</h3>
                        <p>Temos uma equipe de profissionais experientes e dedicados, prontos para atender às suas necessidades.</p>
                    </div>
                    <div className='lp-highlight'>
                        <h3>Resultados Comprovados</h3>
                        <p>Nossas estratégias e técnicas são testadas e comprovadas, garantindo o crescimento do seu negócio.</p>
                    </div>
                    <div className='lp-highlight'>
                        <h3>Suporte Dedicado</h3>
                        <p>Oferecemos suporte contínuo e personalizado para ajudar você a alcançar seus objetivos.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
