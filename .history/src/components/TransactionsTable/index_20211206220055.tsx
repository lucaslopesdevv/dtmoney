import { Container } from "./styles";

export function TransactionsTable {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td>R$12.000,00</td>
                        <td>Serviço</td>
                        <td>Desenvolvimento de Website</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}