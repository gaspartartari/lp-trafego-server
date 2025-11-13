
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

interface WhatsAppButtonProps {
    number: string;
    text: string;
    message: string;
}

const whatsappText = 'Olá! Gostaria de mais informações sobre a InPulso.';


export default function WhatsAppButton ()  {
    const link = `https://wa.me/5511974494221?text=${encodeURIComponent(whatsappText)}`;
    
    return (
       <>
       <div className='lp-container'>
         <div className='lp-whatsapp-button-container'>
            <a 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='lp-whatsapp-button lp-container'
            onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).dataLayer.push({ 'event': 'whatsapp_button' });
            }}
            >
                FALE CONOSCO
                <FontAwesomeIcon icon={faWhatsapp} className='lp-whatsapp-icon' />
                
            </a>


        </div>
       </div></>
    )
}


