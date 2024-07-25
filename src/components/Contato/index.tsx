import { useState } from 'react'
import { Botao } from '../../styles'
import { BotaoCancelarRemover, BotaoEditar, Card } from './styles'

type Props = {
  nome: string
  email: string
  telefone: number
}

const Contato = ({ nome, email, telefone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <h3>{nome}</h3>
      <p>{email}</p>
      <p>{telefone}</p>
      {estaEditando ? (
        <>
          <Botao>Salvar</Botao>
          <BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
            Cancelar
          </BotaoCancelarRemover>
        </>
      ) : (
        <>
          <BotaoEditar onClick={() => setEstaEditando(true)}>
            Editar
          </BotaoEditar>
          <BotaoCancelarRemover>Excluir</BotaoCancelarRemover>
        </>
      )}
    </Card>
  )
}

export default Contato
