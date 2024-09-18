import './styles.css';
import partner1Image from '../../assets/partner1.png';
import partner2Image from '../../assets/partner2.png';

export default function AboutUs() {
    return (
        <section className='lp-about-us'>
            <div className='lp-container'>
                <h2>Sobre Nós</h2>
                <p>
                    <span>Expertise em Performance:</span> Profissionais com vasta experiência entregando resultados reais.
                    <br></br>
                    <br></br>
                    <span>Entendimento Profundo:</span> Personalizamos estratégias com base nas necessidades únicas de cada negócio.
                    <br></br>
                    <br></br>
                    <span>Parceria e Alinhamento:</span> Vamos além das métricas, ajudando nossos clientes a otimizar sua presença digital e alcançar crescimento sustentável.
                </p>
                <div className='lp-about-us-content'>
                    <div className='lp-partner-card'>
                        <img src={partner1Image} alt='Murilo Galante da Silva' />
                        <h3>Murílo Galante</h3>
                        <p>Profissional com mais de 10 anos de experiência em marketing digital. Tem uma abordagem omnichannel para criar pontos de contato estratégicos com os clientes.</p>
                        <a href='https://www.linkedin.com/in/murilo-galante-silva-04240229' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                    <div className='lp-partner-card'>
                        <img src={partner2Image} alt='Gaspar Tartari' />
                        <h3>Gaspar Tartari</h3>
                        <p>Empreendedor, programador e especialista em tráfego pago com mais de 5 anos de experiência. Sólido conhecimento do ambiente tecnológico e de negócios.</p>
                        <a href='https://www.linkedin.com/in/gaspartartari' target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
