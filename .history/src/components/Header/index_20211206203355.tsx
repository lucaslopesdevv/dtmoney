import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="dt money" />
            <button type="button">
                Nova transação
            </button>
        </Container>
    )
}