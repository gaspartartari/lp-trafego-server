import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faChartLine, faShoppingCart, faBullhorn, faCogs, faCirclePlay, faBatteryQuarter } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

export default function ProblemsList() {
  const problems = [
    { text: "Falta de clareza nos resultados", icon: faEye, highlight: "clareza nos resultados" },
    { text: "Dificuldade em gerar vendas", icon: faChartLine, highlight: "gerar vendas" },
    { text: "Escala e otimização de campanhas ", icon: faShoppingCart, highlight: "otimização de campanhas" },
    { text: "Pixel de rastreamento bugado", icon: faBullhorn, highlight: "rastreamento bugado" },
    { text: "Site ou e-ecommerece atual limitado", icon: faBatteryQuarter, highlight: "e-ecommerece atual limitado" },
    { text: "Falta sincronia com sua agência atual", icon: faCogs, highlight: "agência atual" },
    { text: "Não sei por onde começar nos anúncios", icon: faCirclePlay, highlight: "começar nos anúncios" },
  ];

  return (
    <section className="problems-section lp-container">
      <h2>Procurando resolver problemas como estes?</h2>
      <ul className="problems-list">
        {problems.map((problem, index) => (
          <li key={index} className="problem-item">
            <FontAwesomeIcon icon={problem.icon} className="problem-icon" />
            <span>
              {problem.text.split(problem.highlight)[0]}
              <span className='bold' >{problem.highlight}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
