import { useEffect } from 'react';
import './styles.css';
import client1Image from '../../assets/cliente1.jpg';
import client2Image from '../../assets/cliente2.jpg';
import client3Image from '../../assets/cliente3.jpg';
import client4Image from '../../assets/cliente4.jpg';
import client5Image from '../../assets/cliente5.png';
import client6Image from '../../assets/cliente6.jpg';
import client7Image from '../../assets/cliente7.jpg';
import client8Image from '../../assets/cliente8.png';

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

            // Clean up the observer when the component is unmounted
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
                <h2>Veja alguns de nossos cases</h2>
                <div className='lp-clients-grid'>
                    {[{img: client1Image, name: 'Singapura Store', link: 'https://singapurastore.com/', quote: 'Crescimento de 450% YoY gerindo Mídia Paga desde a sua fundação'},
                      {img: client2Image, name: 'Soleah', link: 'https://www.soleah.com.br/', quote: 'Correção de bugs no trackeamento. 58% de aumento ROAS no Google Ads nos primeiros 3 meses'},
                      {img: client3Image, name: 'Eulíricas', link: 'https://www.euliricas.com.br/', quote: 'Lançamento da marca no mundo dos anúncios online alcançando ROAS sustentável no primeiro mês'},
                      {img: client4Image, name: 'Marília Chiele Joias', link: 'https://www.mariliachielejoias.com.br/', quote: 'Lançamento das primeiras campanhas de mídia paga no Google Ads, duplicando faturamento em 3 meses'},
                      {img: client5Image, name: 'Manfrim Store', link: 'https://www.manfrimstore.com.br/', quote: '100K faturados no primeiro mês de Google Ads com ROAS de 1000%. Correção de bugs no traqueamento.'},
                      {img: client6Image, name: 'Adapa Bio', link: 'https://adapabio.com/', quote: 'Consultoria e planejamento para o lançamento da marca no mundo online'},
                      {img: client7Image, name: 'Miss Li', link: 'https://missli.com.br/', quote: 'Cálculo de ROAS e ROI. Gestão de mídia paga multicanal '},
                      {img: client8Image, name: 'Noda', link: 'https://nodacozinha.com.br/', quote: 'Gestão de CRM e Mídia Paga, incluindo automação de e-mail marketing'},
                     ].map((client, index) => (
                      <div key={index} className='lp-client-card'>
                        <a href={client.link} target='_blank' rel='noopener noreferrer'>
                            <img src={client.img} alt={client.name} loading="lazy" />
                            <p>{client.name}</p>
                            <blockquote>{client.quote}</blockquote>
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
