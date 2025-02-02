// import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'

// type Props = {
//   aoPesquisar: (termo: string) => void
// }

// const FormVagas = ({ aoPesquisar }: Props) => {
//   const [termo, setTermo] = useState<string>('')

//   const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     aoPesquisar(termo.toLocaleLowerCase())
//   }

//   return (
//     <form className={styles.form} onSubmit={aoEnviarForm}>
//       <input
//         className={styles.campo}
//         placeholder="Front-end, fullstack, node, design"
//         onChange={(e) => setTermo(e.target.value)}
//         type="search"
//       />
//       <button className={styles.btnPesquisar} type="submit">
//         Pesquisar
//       </button>
//     </form>
//   )
// }
// export default FormVagas

//formVagas.module.css
// .form {
//   display: grid;
//   grid-template-columns: 1fr auto;
//   background-color: var(--cor-secundaria);
//   padding: 32px;
//   border-radius: 12px;
//   margin-top: 40px;
// }

// .btnPesquisar {
//   background-color: var(--cor-principal);
//   border: 1px solid var(--cor-principal);
//   height: 40px;
//   padding: 0 16px;
//   font-size: 18px;
//   color: var(--cor-secundaria);
//   margin-left: 8px;
//   cursor: pointer;
// }

// .campo {
//   padding: 0 16px;
//   outline-color: var(--cor-principal);
// }
import { useState, ChangeEvent, FormEvent } from 'react'
import { Form, Botao, Campo } from './FormVagas.module'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form as="form" onSubmit={aoEnviarForm}>
      <Campo
        as="input"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <Botao as="button" type="submit">
        Pesquisar
      </Botao>
    </Form>
  )
}

export default FormVagas
