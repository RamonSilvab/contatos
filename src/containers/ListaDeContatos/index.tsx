import { Botao } from '../../styles'
import { BotaoCancelarRemover, Card } from './styles'

const ListaDeContatos = () => {
  return (
    <Card>
      <h3>Ramon</h3>
      <p>ramonsilvab05@gmail.com</p>
      <p>28 99272-7751</p>
      <Botao>Editar</Botao>
      <BotaoCancelarRemover>Excluir</BotaoCancelarRemover>
    </Card>
  )
}

export default ListaDeContatos
