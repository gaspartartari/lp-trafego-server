import './styles.css';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaHandHoldingDroplet } from 'react-icons/fa6';

const PillarsSection = () => {
    const [activePillar, setActivePillar] = useState<number | null>(null);

    const pillars = [
        {
            id: 1,
            title: 'Expertise em Performance',
            description: {
                p1: 'O mundo do marketing digital está em constante evolução, e na InPulso, estamos sempre um passo à frente.',
                p2: 'Nossa dedicação ao aprimoramento contínuo da equipe garante que estamos atualizados com as últimas tendências e estratégias do mercado. ',
                p3: 'É por isso que contamos com profissionais altamente qualificados, prontos para entregar resultados sólidos e comprovados, que impulsionam a performance do seu negócio',
            }
        },
        {
            id: 2,
            title: 'Entendimento Profundo',
            description: {
                p1: 'Cada negócio tem sua própria identidade, e nós da InPulso reconhecemos e valorizamos isso. Por isso, não acreditamos em soluções genéricas.',
                p2: 'Trabalhamos de forma colaborativa e personalizada, desenvolvendo estratégias que realmente atendem às necessidades e objetivos específicos do seu negócio, garantindo que nossa abordagem esteja sempre alinhada com a sua realidade e visão.',
                p3: '',
            }        },
        {
            id: 3,
            title: 'Parceria e Alinhamento',
            description: {
                p1: 'Acreditamos em construir parcerias verdadeiramente sólidas e duradouras. Vamos além das métricas, oferecendo suporte contínuo e insights estratégicos para otimizar sua presença digital.',
                p2: 'Nosso objetivo é caminhar junto com você, garantindo um crescimento sustentável e resultados que fazem a diferença a longo prazo. ',
                p3: '',
            }
        },
    ];

    return (
        <section className="pillars-section">
            <div className="lp-container">
                <h2 className="pillars-title">Nossos Valores <FaHandHoldingDroplet className='pillars-icon'/></h2>
                <div className="pillars-grid">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.id}
                            className={`pillar-card ${activePillar === pillar.id ? 'active' : ''}`}
                            onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
                        >
                            <div className="pillar-header">
                                <FaChevronRight className={`pillar-icon ${activePillar === pillar.id ? 'active-icon' : ''}`} />
                                <h3 className="pillar-title">{pillar.title}</h3>
                            </div>
                            <p className={`pillar-description ${activePillar === pillar.id ? 'show' : 'hide'}`}>
                                {pillar.description.p1}
                                <br />
                                <br />
                                {pillar.description.p2}
                                <br />
                                <br />
                                {pillar.description.p3}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PillarsSection;

