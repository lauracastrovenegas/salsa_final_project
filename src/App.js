import styled from "styled-components";
import map from './assets/map.png'
import theme from "./theme";
import HeaderBlock from "./components/HeaderBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PinContainer from "./components/PinContainer";

function App() {
  return (
    <Wrapper>
      <BackgroundImage>
        <HeaderBlock/>
        <DownArrow>
          <FontAwesomeIcon icon={faChevronDown}/>
          <PinContainer/>
        </DownArrow>
      </BackgroundImage>
    </Wrapper>
  );
}

export default App;

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
  display: flex;

  svg {
    color: #FFFFFF;
    margin: 0rem auto;
    font-size: 5rem;
  }
`
