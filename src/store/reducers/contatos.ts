import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Ramon',
      email: 'ramonsilvab05@gmail.com',
      telefone: 28992727751
    },
    {
      id: 2,
      nome: 'Bruna',
      email: 'brunavalims2@gmail.com',
      telefone: 28992725559
    },
    {
      id: 3,
      nome: 'Norky',
      email: 'norkyzinho@gmail.com',
      telefone: 28992727553
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
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
