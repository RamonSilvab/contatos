import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const FormNovoContato = styled.form`
  display: flex;
  padding: 0 32px;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
`
export const Cancelar = styled(Link)`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.vermelho};
  border-radius: 8px;
  margin-right: 8px;
  text-decoration: none;
`
