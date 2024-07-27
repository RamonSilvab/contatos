import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Botao, Input } from '../../styles'
import { BotaoCancelarRemover, BotaoEditar, Card } from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [editarNome, setEditarNome] = useState('')
  const [editarEmail, setEditarEmail] = useState('')
  const [editarTelefone, setEditarTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setEditarNome(nomeOriginal)
      setEditarEmail(emailOriginal)
      setEditarTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEditarNome(nomeOriginal)
    setEditarEmail(emailOriginal)
    setEditarTelefone(telefoneOriginal)
  }

  return (
    <Card>
      {estaEditando ? (
        <>
          <Input
            type="text"
            placeholder={nomeOriginal}
            value={editarNome}
            onChange={(evento) => setEditarNome(evento.target.value)}
          />
          <Input
            type="text"
            placeholder={emailOriginal}
            value={editarEmail}
            onChange={(evento) => setEditarEmail(evento.target.value)}
          />
          <Input
            type="text"
            placeholder={telefoneOriginal}
            value={editarTelefone}
            onChange={(evento) => setEditarTelefone(evento.target.value)}
          />
          <div>
            <Botao
              onClick={() => {
                dispatch(
                  editar({
                    nome: editarNome,
                    email: editarEmail,
                    telefone: editarTelefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </Botao>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </div>
        </>
      ) : (
        <>
          <h3>{nomeOriginal}</h3>
          <p>{emailOriginal}</p>
          <p>{telefoneOriginal}</p>
          <div>
            <BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </BotaoEditar>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Excluir
            </BotaoCancelarRemover>
          </div>
        </>
      )}
    </Card>
  )
}

export default Contato
