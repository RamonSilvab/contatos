import styled from 'styled-components'

const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  font-size: 24px;
  text-shadow: 1px 1px 2px #0000005f;
  margin: 64px 0;

  img {
    height: 46px;
    margin: 8px 20px 0;
  }

  @media (max-width: 567px) {
    font-size: 16px;

    img {
      height: 26px;
      margin: 6px 8px 0;
    }
  }
`

export default Titulo
