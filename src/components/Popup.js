import styled from "styled-components/macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import YoutubeEmbed from "./YoutubeEmbed"
import data from "../data"

const PopupWrapper = styled.div`
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(22,22,22,0.5);
    display: flex;
`

const PopupContainer = styled.div`
    width: 60vw;
    max-height: 80vh;
    margin: auto auto;
    background-color: white;
    border-radius: 30px;
    z-index: 3000;
    padding: 2rem 5rem 5rem 5rem ;
    
`

const Close = styled.div`
    display: flex;

    svg {
        margin: 0rem -2rem 1rem auto;

        :hover {
            cursor: pointer;
        }
    }
`

const Title = styled.h2`
    text-align: center;
    font-family: 'Staatliches', cursive;
    font-weight: 400;
    font-size: 2rem;
    margin-top: 0rem;
`

const Text = styled.p`
    font-size: 1.2rem;
`

const TextContainer = styled.div`
    overflow-y: scroll;
`

const Video = styled.div`
    width: 80%;
    margin: auto auto;
`

const Image = styled.div`


    img {
        width: 100%;
        object-fit: cover;
    }
`

const ImageTextContainer = styled.div`
    height: 60vh;
    overflow-y: scroll;
`

const Popup = ({ item, setItemSelected }) => {
    console.log(item)
    //console.log(data[item.index - 1])
    return (
        item ?
            <PopupWrapper aria-hidden={item} role="dialog" tabindex={item ? 0 : -1} onClick={() => setItemSelected(null)}>
                <PopupContainer onClick={e => e.stopPropagation()}>
                    <Close><FontAwesomeIcon icon={faX} onClick={() => setItemSelected(null)} /></Close>

                    {item.title ? <Title>{item.title}</Title> : null}

                    {data[item.index - 1].embed ? data[item.index - 1].embed : null}
                    
                    {data[item.index - 1].videoURL || data[item.index - 1].image || data[item.index - 1].text ?
                    <ImageTextContainer>
                        {data[item.index - 1].videoURL ? <Video><YoutubeEmbed videoLink={data[item.index - 1].videoURL} /></Video> : null}

                        {data[item.index - 1].image ? <Image><img src={data[item.index - 1].image} alt="" /></Image> : null}

                        {data[item.index - 1].text ?
                            <TextContainer>
                                {data[item.index - 1].text.map((paragraph) => (
                                    <Text>{paragraph}</Text>
                                ))}
                            </TextContainer>
                            : null}
                    </ImageTextContainer> : null}

                    {data[item.index - 1].image_texts ?
                        <ImageTextContainer>
                            {data[item.index - 1].image_texts.map((image) => (
                                <div>
                                    <Image><img src={image.image} alt="" /></Image>
                                    <Text>{image.text}</Text>
                                </div>
                            ))}
                        </ImageTextContainer> : null}

                </PopupContainer>
            </PopupWrapper>
            : null
    )
}

export default Popup;