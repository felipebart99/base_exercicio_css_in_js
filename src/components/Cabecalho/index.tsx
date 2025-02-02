// import styles from './Cabecalho.module.css'

// const Cabecalho = () => (
//   <header className={styles.cabecalho}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

// export default Cabecalho

import styled from 'styled-components'

const StyledCabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Titulo = styled.h1`
  margin: 0;
`

const Cabecalho = () => (
  <StyledCabecalho>
    <Titulo>EBAC Jobs</Titulo>
  </StyledCabecalho>
)

export default Cabecalho
