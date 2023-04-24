import styled from "styled-components";
import map from './assets/map.png'
import theme from "./theme";
import HeaderBlock from "./components/HeaderBlock";
import down from './assets/down.svg'

const Wrapper = styled.div`
  height: 200vh;
  background-color: ${theme.colors.blue};
`

const BackgroundImage = styled.div`
  background-image: url(${map});
  background-attachment: fixed;
  padding-top: 4rem;
  height: 100%;
  width: 100%;
  background-position: top left;
  background-size: contain;
  background-repeat: no-repeat;
`

const DownArrow = styled.div`
  height: 3rem;
  display: flex;
  
  img {
    height: 100%;
    object-fit: contain;
    margin: 0rem auto;
  }

  svg {
    color: "#FFFFFF";
  }
`


function App() {
  return (
    <Wrapper>
      <BackgroundImage>
        <HeaderBlock/>
        <DownArrow>
          <img src={down} alt="down arrow"/>
        </DownArrow>
      </BackgroundImage>
    </Wrapper>
  );
}

export default App;
