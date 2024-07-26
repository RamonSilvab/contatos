import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Botao } from '../../styles'
import { BotaoCancelarRemover, BotaoEditar, Card } from './styles'

import { remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
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
          <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Excluir
          </BotaoCancelarRemover>
        </>
      )}
    </Card>
  )
}

export default Contato
