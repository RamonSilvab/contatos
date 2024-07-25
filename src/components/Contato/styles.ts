import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  max-width: 50%;
  background-color: #fcfcfc;
  padding: 16px;
  border-radius: 16px;
  margin: 24px auto 24px;
  box-shadow: 4px 4px 8px #00000061;

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
export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.azulEscuro};
`
