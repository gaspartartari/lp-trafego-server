import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <footer className='lp-footer-main'>
            <div className='lp-container lp-footer'>
                <div className='lp-footer-empresa'>
                   <img src={logo} alt="logo" />
                </div>
                <div className='lp-footer-contact'>
                    <a href="https://www.instagram.com/inpulso.online" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='lp-footer-fa' icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/inpulso-online/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='lp-footer-fa' icon={faLinkedin} />
                    </a>
          
                </div>
            </div>
        </footer>
);
}
