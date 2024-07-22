import ListaDeContatos from './components/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
