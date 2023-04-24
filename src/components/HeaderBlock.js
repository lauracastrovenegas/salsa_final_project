import styled from "styled-components"

const HeaderBlock = () => {
    return (
        <HeaderWrapper>
            <Title>THE SOUNDS OF THE HISPANIC CARIBBEAN</Title>
            <Subtitle>
                <p>Columbia University</p>
                <p>MUSIV2020</p>
                <p>Laura Castro Venegas</p>
                <p>Alejandra Maria Nunez</p>
                <p>Maria Isabel Nunez</p>
            </Subtitle>
        </HeaderWrapper>
    )
}

export default HeaderBlock;

const HeaderWrapper = styled.div`
    font-family: 'Staatliches', cursive;
    margin: 0rem 8rem 0rem 8rem;
    background: rgba(255, 255, 255, 0.4);
    text-align: center;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
`

const Title = styled.div`
    font-size: 8rem;
`

const Subtitle = styled.div`
    margin-top: 5rem;
    font-size: 1.8rem;

    p {
        margin: 0;
    }
`