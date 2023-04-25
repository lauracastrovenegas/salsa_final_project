import styled from "styled-components/macro";
import pin from '../assets/pin.png'
import useWindowDimensions from '../hooks/window.js'
import { cover } from 'intrinsic-scale';
import Popup from "./Popup";
import { useState, useEffect, useRef } from "react";
import { computeLocation } from "./utils";

const mapinfo = {
    width: 2360,
    height: 1678,
}

const PinContainer = () => {
    const { width: vw, height: vh } = useWindowDimensions();
    const { width: iw, height: ih, x, y } = cover(vw, vh, mapinfo.width, mapinfo.height)
    const marks = computeLocation(iw, ih, x, y)
    const [itemSelected, setItemSelected] = useState(null);

    const [scrollY, setScrollY] = useState(0);


    function handleScroll() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <Wrapper className={(scrollY > 750) ? "visible" : "invisible"}>
            <Popup item={itemSelected} setItemSelected={setItemSelected} />
            <SmallHeader left={(iw * 0.3) + x} top={(ih * 0.62) + y}>THE SOUNDS OF THE HISPANIC CARIBBEAN</SmallHeader>
            {marks.map((item) => (
                <Pin top={item.y} left={item.x} onClick={() => setItemSelected(item)}>
                    <img src={pin} alt="red pin" />
                    <p>{item.location}</p>
                </Pin>
            ))}
        </Wrapper>
    )
}

export default PinContainer;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    padding-top: 1rem;
    transition: opacity 0.6s ease-out;

    &.invisible {
        opacity: 0;
        visibility: hidden;
    }

    &.visible {
        opacity: 1;
        visibility: visible;
    }
`

const Pin = styled.div`
    position: absolute;
    cursor: pointer;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    display: flex;

    p {
        display: none;
        color: black;
        font-family: 'Staatliches', cursive;
        font-size: 1.3rem;
        background-color: white;
        border-radius: 15px;
        padding: 0.75rem 1.75rem;
        margin-left: 0.5rem;
    }

    img {
        height: 3rem;
        object-fit: contain;
    }

    :hover {
        p {
            display: block;
        }
    }
`

const SmallHeader = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    font-size: 3rem;
    width: fit-content;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    background: rgba(255, 255, 255, 0.4);
    font-family: 'Staatliches', cursive;
`