import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  max-width: 50%;
  background-color: #fcfcfc;
  padding: 16px;
  border: 1px solid black;
  border-radius: 16px;
  margin: 24px auto 24px;

  h3,
  p {
    background-color: #fcfcfc;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }

  @media (max-width: 567px) {
    max-width: 90%;
  }
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
