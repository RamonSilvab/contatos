import Contato from '../../components/Contato'

const contatos = [
  {
    nome: 'Ramon',
    email: 'ramonsilvab05@gmail.com',
    telefone: 28992727751
  },
  {
    nome: 'Bruna',
    email: 'brunavalims2@gmail.com',
    telefone: 28992725559
  },
  {
    nome: 'Norky',
    email: 'norkyzinho@gmail.com',
    telefone: 28992727553
  }
]

const ListaDeContatos = () => {
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
