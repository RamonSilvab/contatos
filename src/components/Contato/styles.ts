import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  background-color: ${variaveis.branco};
  padding: 16px;
  border-radius: 16px;
  margin: 24px auto 24px;
  box-shadow: 4px 4px 8px #00000061;

  h3,
  p {
    background-color: ${variaveis.branco};
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }

  div {
    background-color: ${variaveis.branco};
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
