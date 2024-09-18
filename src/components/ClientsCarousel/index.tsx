
import Slider from 'react-slick';
import './styles.css';
import client1 from '../../assets/logos-clientes/1.jpg';
import client2 from '../../assets/logos-clientes/2.jpg';
import client3 from '../../assets/logos-clientes/3.jpg';
import client4 from '../../assets/logos-clientes/4.jpg';
import client5 from '../../assets/logos-clientes/5.jpg';
import client6 from '../../assets/logos-clientes/6.jpg';
import client7 from '../../assets/logos-clientes/7.jpg';
import client8 from '../../assets/logos-clientes/8.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

const clients = [client1, client2, client3, client4, client5, client6, client7, client8];

export default function ClientsCarousel() {

    const [isClient, setIsClient] = useState(false);

    useEffect (() => {
        setIsClient(true);
    }, [])



    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    if (!isClient) {
        return null; // Não renderiza nada no lado do servidor
    }

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {clients.map((client, index) => (
                    <div key={index} className="carousel-item">
                        <img src={client} alt={`Cliente ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
