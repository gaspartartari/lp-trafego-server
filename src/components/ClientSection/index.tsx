import { useEffect } from 'react';
import './styles.css';
import client1Image from '../../assets/images/singa.png';
import client2Image from '../../assets/images/soleah.jpg';
import client3Image from '../../assets/images/euliricas.jpg';
import client4Image from '../../assets/images/mcjoias.jpg';
import client6Image from '../../assets/images/adapabio.jpg';
import client7Image from '../../assets/images/missli2.jpg';
import client8Image from '../../assets/images/noda.jpg';



export default function ClientsSection() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            });

            const clientCards = document.querySelectorAll('.lp-client-card');
            clientCards.forEach(card => {
                observer.observe(card);
            });

            return () => {
                clientCards.forEach(card => {
                    observer.unobserve(card);
                });
            };
        }
    }, []);

    return (
        <section className='lp-clients'>
            <div className='lp-container'>
                <h2>Um pouco dos nossos cases...</h2>
                <div className='lp-clients-grid'>
                    {[
                        { img: client1Image, name: 'SINGA', link: 'https://singapurastore.com/', quote: 'Crescimento de 450% YoY gerindo Mídia Paga desde a sua fundação' },
                        { img: client2Image, name: 'SOLEAH', link: 'https://www.soleah.com.br/', quote: 'Correção de bugs no trackeamento. 58% de aumento ROAS no Google Ads nos primeiros 3 meses' },
                        { img: client3Image, name: 'EULÍRICAS', link: 'https://www.euliricas.com.br/', quote: 'Lançamento da marca no mundo dos anúncios online alcançando ROAS sustentável no primeiro mês' },
                        { img: client4Image, name: 'MC JÓIAS', link: 'https://www.mariliachielejoias.com.br/', quote: 'Lançamento das primeiras campanhas de mídia paga no Google Ads, duplicando faturamento em 3 meses' },
                        { img: client6Image, name: 'ADAPA BIO', link: 'https://adapabio.com/', quote: 'Consultoria e planejamento para o lançamento da marca no mundo online'  },
                        { img: client7Image, name: 'MISS LI', link: 'https://missli.com.br/', quote: 'Cálculo de ROAS e ROI. Gestão de mídia paga multicanal ' },
                        { img: client8Image, name: 'NODA', link: 'https://nodacozinha.com.br/', quote: 'Gestão de CRM e Mídia Paga, incluindo automação de e-mail marketing' },
                    ].map((client, index) => (
                        <div key={index} className='lp-client-card'>
                            <a href={client.link} target='_blank' rel='noopener noreferrer'>
                                    <div className='client-image-container'>
                                        <img className='client-image' src={client.img} alt={client.name} loading="lazy" />
                                        {/* Dark overlay and client name */}
                                        <div className='client-overlay'>
                                            <p className='client-name'>{client.name}</p>
                                        </div>
                                    </div>
                              
                                <blockquote>{client.quote}</blockquote>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
