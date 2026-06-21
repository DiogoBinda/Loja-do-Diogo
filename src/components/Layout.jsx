import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"

function Layout({ children }) {
  return (
    <>
      <Cabecalho titulo="Loja do Diogo" />

      <main>
        {children}
      </main>

      <Rodape />
    </>
  )
}

export default Layout