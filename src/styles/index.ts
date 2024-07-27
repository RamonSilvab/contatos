import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    background-color: #c1e2f7;
  }
`
export const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;
`
export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.verde};
  border-radius: 8px;
  margin-right: 8px;
`

export default EstiloGlobal
