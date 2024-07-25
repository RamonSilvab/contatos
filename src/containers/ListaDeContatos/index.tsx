import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <ul>
      {contatos.map((c) => (
        <li key={c.nome}>
          <Contato nome={c.nome} email={c.email} telefone={c.telefone} />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
