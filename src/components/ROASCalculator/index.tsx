import React, { useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';

const ROASCalculator: React.FC = () => {
    const [revenue, setRevenue] = useState<string>('');
    const [fixedCosts, setFixedCosts] = useState<string>('');
    const [variableCosts, setVariableCosts] = useState<string>('');
    const [roas, setRoas] = useState<number | null>(null);

    const calculateROAS = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const revenueNum = parseFloat(revenue);
        const fixedCostsNum = parseFloat(fixedCosts);
        const variableCostsPercentage = parseFloat(variableCosts);

        if (isNaN(revenueNum) || isNaN(fixedCostsNum) || isNaN(variableCostsPercentage)) {
            alert("Por favor, insira números válidos.");
            return;
        }

        const variableCostsNum = (variableCostsPercentage / 100) * revenueNum;
        const totalCost = fixedCostsNum + variableCostsNum;
        const profitMargin = (revenueNum - totalCost) / revenueNum;

        if (profitMargin <= 0) {
            alert("A receita gerada é inferior aos custos totas, portanto a margem de lucro é negativa, independente da situação.");
            return;
        }

        const result = 1 / profitMargin;

        setRoas(parseFloat(result.toFixed(2)));
    };

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    };

    return (
        <div className="lp-container">
            <div className="roas-calculator">
                <h2>Calculadora de ROAS</h2>
                <p>
                    <span><strong>Como Utilizar a Calculadora:</strong></span>
                    <span><strong>Receita:</strong> Insira o valor total da receita gerada ou projetada pelas suas vendas.</span>
                    <span><strong>Custos Fixos:</strong> Insira o total dos seus custos fixos.</span>
                    <span><strong>Custos Variáveis (%):</strong> Insira o percentual % médio dos seus custos variáveis.</span>
                </p>
                <form onSubmit={calculateROAS}>
                    <div className="form-group">
                        <label>Receita:</label>
                        <input
                            type="number"
                            placeholder="Ex: 100000"
                            value={revenue}
                            onChange={handleInputChange(setRevenue)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Custos Fixos:</label>
                        <input
                            type="number"
                            placeholder="Ex: 30000"
                            value={fixedCosts}
                            onChange={handleInputChange(setFixedCosts)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Custos Variáveis (%):</label>
                        <input
                            type="number"
                            placeholder="Ex: 40"
                            value={variableCosts}
                            onChange={handleInputChange(setVariableCosts)}
                            required
                        />
                    </div>
                    <button className='lp-roas-calculator-button' type="submit">Calcular ROAS</button>
                </form>
                {roas !== null && (
                    <div className="result">
                        <h3>ROAS: {roas}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ROASCalculator;
