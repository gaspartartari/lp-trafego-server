
import './styles.css';


export default function Testimonials() {



    return (
        <section className='lp-testimonials'>
            <div className='lp-container'>
                <h2>O que nossos clientes dizem</h2>

                <div className='lp-testimonials-grid'>
                    <div className='lp-testimonial'>
                        <blockquote>"Após tentativas frustrantes com outras agências, parceria com a InPulso veio no momento certo.
                            A sensação é de ter uma equipe qualificada de performance dentro da minha empresa."</blockquote>
                        <cite>Aline Hiert - MissLi</cite>
                        <p>Fundadora e proprietária</p>
                    </div>
                    <div className='lp-testimonial'>
                        <blockquote>"A InPulso foi essencial para a transformação digital da Adapa Bio. Desde então, se tornaram parceria indispensável da marca."</blockquote>
                        <cite>Nicolas Alcalay - Adapabio</cite>
                        <p>CEO</p>
                    </div>
                    <div className='lp-testimonial'>
                        <blockquote>"A InPulso está conosco desde nossos primórdios, e não é a toa. Profissionais qualificados e dedicados no que fzem."</blockquote>
                        <cite>Lucaas - Singa</cite>
                        <p>CEO</p>
                    </div>
                    <div className='lp-testimonial'>
                        <blockquote>"Nossa participação e sucesso no mercado digital só existe devido a InPulso. Nos pegaram pelo colo e nos mostraram um caminho que nunca haviamos imaginado."</blockquote>
                        <cite>Marilia Chiele - MC Joias</cite>
                        <p>Fundadora</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
