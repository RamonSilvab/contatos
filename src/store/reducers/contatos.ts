import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Kikos Restaurante',
      email: 'kikosrestaurante@gmail.com',
      telefone: ' (28) 3027-6866'
    },
    {
      id: 2,
      nome: 'K-Skina Lanches',
      email: 'kskinalanches@gmail.com',
      telefone: '(28) 3511-9159'
    },
    {
      id: 3,
      nome: 'Bizzoca Lanches',
      email: 'bizokalanches@gmail.com',
      telefone: '(28) 99926-5716'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatosJaExiste = state.itens.find(
        (c) =>
          c.nome.toLocaleLowerCase() === action.payload.nome.toLocaleLowerCase()
      )

      if (contatosJaExiste) {
        alert('Já existe um Contato com esse nome!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
