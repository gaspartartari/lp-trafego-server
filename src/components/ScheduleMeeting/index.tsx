import './styles.css';
import ScheduleButton from '../ScheduleButtonProps';

export default function ScheduleMeeting() {
    return (
        <section className='lp-schedule-meeting'>
            <div className='lp-container'>
                <h2>Agende uma Reunião Gratuita</h2>
                <p>Converse conosco por 30 minutos e descubra como podemos ajudar o seu negócio a crescer.</p>
                <ScheduleButton />
            </div>
        </section>
    );
}

