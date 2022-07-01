import React from 'react';
import {CardBack} from "../index";

type t_Cards = {
    size: number,
    offsetLeft: number
    offsetTop: number
}

type t_props = Partial<t_Cards> & {
    onClick?: () => void,
    width?: number,
    height? :number
}

const Cards = ({size, offsetTop, offsetLeft}: t_Cards) => {
    const c: React.ReactNode[] = [];
    for (let i = 1; i < size; ++i)
        c.push(<CardBack key={i} style={{
            position: 'absolute',
            top: offsetTop * i,
            left: offsetLeft * i,
            border: '1px solid black',
            borderRadius: 15
        }}/>)

    return (
        <>
            {c}
        </>
    )
}

const Deck = ({size = 50, offsetLeft = -1, offsetTop = -1,width,height, onClick}: t_props) => (
    <div style={{
        position: "relative",
        width: width??158 + Math.abs(size * offsetLeft) + size,
        height: height??258 + Math.abs(size * offsetTop) + size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "scaleX(1) scaleY(1.1) scaleZ(1) rotateX(60deg) rotateY(0deg) rotateZ(42deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg)"

    }}>
        <div style={{position: 'relative'}}>
            <CardBack style={{border: '1px solid black', borderRadius: 15}}/>
            <Cards size={size} offsetLeft={offsetLeft} offsetTop={offsetTop}/>
            <div onClick={onClick} style={{position: 'absolute',inset: 0,left: size * offsetLeft,top: size * offsetTop}}/>
        </div>
    </div>
)
export default Deck;
