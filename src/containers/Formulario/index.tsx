import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import Titulo from '../../components/Header/styles'
import { Botao, Input } from '../../styles'
import { Cancelar, FormNovoContato } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <>
      <Titulo>
        <img
          src="https://projeto-lista-telefonica.vercel.app/imagens/logo-agenda-telefonica.png"
          alt="logo agenda telefonica"
        />
        <h1>Novo Contato</h1>
      </Titulo>
      <FormNovoContato onSubmit={cadastrarContato}>
        <Input
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          type="text"
          placeholder="Nome completo"
          required
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="email"
        />
        <Input
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <div>
          <Botao type="submit">Salvar contato</Botao>
          <Cancelar to="/">Cancelar</Cancelar>
        </div>
      </FormNovoContato>
    </>
  )
}

export default Formulario
