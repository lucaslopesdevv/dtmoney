import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
}
    *{
        margin: 0;
        padding: 0;
        box-sizing: boder-box;
    }

    body {
        background-color: var(---background);
        -webkit-font-smoothing: antialiased;
    }


`