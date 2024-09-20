import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
    id: number;
    blockquote: string;
    cite: string;
    position: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        blockquote: '"Após tentativas frustrantes com outras agências, parceria com a InPulso veio no momento certo. A sensação é de ter uma equipe qualificada de performance dentro da minha empresa."',
        cite: 'Aline Hiert',
        position: 'Fundadora e proprietária',
        company: 'MissLi'
    },
    {
        id: 2,
        blockquote: '"A InPulso foi essencial para a transformação digital da Adapa Bio. Desde então, se tornaram parceria indispensável da marca."',
        cite: 'Nicolas Alcalay',
        position: 'CEO',
        company: 'Adapabio'
    },
    {
        id: 3,
        blockquote: '"A InPulso está conosco desde nossos primórdios, e não é a toa. Profissionais qualificados e dedicados no que fzem."',
        cite: 'Lucas',
        position: 'CEO',
        company: 'Singa'
    },
    {
        id: 4,
        blockquote: '"Nossa participação e sucesso no mercado digital só existe devido a InPulso. Nos pegaram pelo colo e nos mostraram um caminho que nunca haviamos imaginado."',
        cite: 'Marilia Chiele',
        position: 'Fundadora',
        company: 'MC Joias'
    }
];

export default function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonial, setTestimonial] = useState(testimonials[0]);

    const handleNextClick = useCallback(() => {
        const newIndex = (currentIndex + 1) % testimonials.length;
        setCurrentIndex(newIndex);
        setTestimonial(testimonials[newIndex]);
    }, [currentIndex, testimonials]);

    const handlePrevClick = useCallback(() => {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        setCurrentIndex(newIndex);
        setTestimonial(testimonials[newIndex]);
    }, [currentIndex, testimonials]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextClick();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [handleNextClick]);

    return (
        <section className='lp-testimonials'>
            <div className='lp-container'>
                <h2>O que nossos clientes dizem</h2>

                <div className='lp-testimonials-grid'>
                    <button className='lp-testimonial-nav' onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faAngleLeft} />                    
                    </button>
                    <div className='lp-testimonial'>
                        <blockquote>{testimonial.blockquote}</blockquote>
                        <cite>{testimonial.cite}</cite>
                        <p>{testimonial.position}</p>
                        <h3>{testimonial.company}</h3>
                    </div>
                    <button className='lp-testimonial-nav' onClick={handlePrevClick}>
                        <FontAwesomeIcon icon={faAngleRight} />                    
                    </button>
                </div>

            </div>
        </section>
    );
}



