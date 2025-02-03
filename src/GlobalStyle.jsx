import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --cor-principal: #a7727d;
    --cor-secundaria: #f9f5e7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
    margin: 0;
  padding: 0;
  overflow-x: hidden; /* Impede rolagem horizontal */
  width: 100vw; /* Garante que o body não ultrapasse a largura da tela */
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 100%;
    }
  }
`
