import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faHandshake, faLaptopCode, faMagnifyingGlass, faSackDollar, faCookieBite, faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
    useEffect(() => {
        const cards = document.querySelectorAll('.lp-service-card');
        let index = 0;

        function animateCards() {
            cards.forEach((card, i) => {
                card.classList.remove('shake');
                if (i === index) {
                    card.classList.add('shake');
                }
            });
            index = (index + 1) % cards.length;
        }

        // Adiciona a classe 'visible' a todos os cards após a montagem
        cards.forEach(card => {
            card.classList.add('visible');
        });

        const interval = setInterval(animateCards, 1000); // Troca de card a cada 1 segundo
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='lp-services'>
            <div className='lp-container lp-services-flex-control'>
                <h2>Estamos aqui para te ajudar com</h2>
                <div className='lp-services-grid'>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faFacebook} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faGoogle} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faPinterest} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faTiktok} size="2x" className="fa-icon" />
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-icon" />
                        </div>
                        <p>Gestão de Mídia Paga e Orgânica</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faHandshake} size="2x" className="fa-icon" />
                        </div>
                        <p>Consultoria e Planejamento</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faCookieBite} size="2x" className="fa-icon" />
                        </div>
                        <p>Configuração de Tags de Rastreamento</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" className="fa-icon" />
                        </div>
                        <p>Otimização para Mecanismos de Busca (SEO)</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faLaptopCode} size="2x" className="fa-icon" />
                        </div>
                        <p>Construção de E-commerce, Site e Landing page</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faTabletScreenButton} size="2x" className="fa-icon" />
                        </div>
                        <p>Desenvolvimento de aplicativos web</p>
                    </div>
                    <div className='lp-service-card'>
                        <div className="lp-icons">
                            <FontAwesomeIcon icon={faSackDollar} size="2x" className="fa-icon" />
                        </div>
                        <p>Gestão de clientes (CRM) </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
