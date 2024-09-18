import  { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './styles.css';

export default function InvestmentCounter() {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            });
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (observer && counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    

    return (
        <section className='lp-investment-counter'>
            <div className='lp-container'>
                <h2>TOTAL GERADO EM VENDAS</h2>
                <div className='lp-counter' ref={counterRef}>
                    {startCount && (
                        <CountUp
                            start={0}
                            end={12364000}
                            duration={7}
                            separator="."
                            decimals={2}
                            decimal=","
                            prefix="R$"
                            suffix="+"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}
