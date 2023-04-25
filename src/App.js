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
        </DownArrow>
        <PinContainer/>
      </BackgroundImage>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: fit-content;
  background-color: ${theme.colors.blue};
  height: 190vh;
`

const BackgroundImage = styled.div`
  background-image: url(${map});
  background-attachment: fixed;
  padding-top: 4rem;
  height: 100%;
  width: 100%;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`

const DownArrow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  svg {
    color: #FFFFFF;
    margin: 0rem auto;
    font-size: 5rem;
  }
`
