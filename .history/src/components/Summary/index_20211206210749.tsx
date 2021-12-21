import incomeImg from '../../assets/income.svg';

import { Container } from './styles';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
        </Container>
    )
}