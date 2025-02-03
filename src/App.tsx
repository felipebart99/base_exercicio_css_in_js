import styled from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { GlobalStyle } from './GlobalStyle.jsx'

// Definição do container com estilos
const Container = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 120px;
  overflow-x: hidden; /* Impede rolagem horizontal */
  width: 100vw; /* Garante que o body não ultrapasse a largura da tela */
`

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Hero />
      <ListaVagas />
    </Container>
  )
}

export default App
