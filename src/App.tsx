import Projetos from './containers/Projetos/index'
import Sidebar from './containers/Sidebar/index'
import Sobre from './containers/Sobre/index'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
