import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Ramon', 'ramonsilvab05@gmail.com', 28992727751, 1),
    new Contato('Bruna', 'brunavalims2@gmail.com', 28992725559, 2),
    new Contato('Norky', 'norkyzinho@gmail.com', 28992727553, 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
