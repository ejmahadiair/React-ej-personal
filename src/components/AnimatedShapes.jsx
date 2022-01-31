import React from "react";
import styled from "styled-components";

const Square = styled.div`
    width: 60px;
    height: 60px;
    background: #4e6bff;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 5px 0px #000000;
    box-shadow: 0px 0px 5px 0px #000000;
    animation: square 25s linear alternate infinite;

    @keyframes square {
        to {
            transform: translate(80vw, 70vh);
        }
    }
`;
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f94892;
    opacity: 0.6;
    position: absolute;
    top: 20px;
    left: 100px;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 5px 0px #000000;
    box-shadow: 0px 0px 5px 0px #000000;
    animation: circle 30s linear alternate infinite;
    @keyframes circle {
        to {
            transform: translate(80vw, 70vh);
        }
    }
`;
const Circle2 = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #7cd1b8;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 1000px;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 5px 0px #000000;
    box-shadow: 0px 0px 5px 0px #000000;
    animation: circle2 30s linear alternate infinite;
    @keyframes circle2 {
        to {
            left: 0;
            top: 80vh;
        }
    }
`;
const Circle3 = styled.div`
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 300px;
    z-index: -1;
    -webkit-box-shadow: 0px 0px 5px 0px #000000;
    box-shadow: 0px 0px 5px 0px #000000;
    animation: circle3 35s linear alternate infinite;
    @keyframes circle3 {
        0% {
            background: #519259;
            top: 30px;
            left: 300px;
        }
        10% {
            background: #c1deae;
            top: 300px;
            left: 300px;
        }
        20% {
            background: #313552;
            top: 300px;
            left: 50px;
        }
        30% {
            background: #655d8a;
            top: 600px;
            left: 50px;
        }
        40% {
            background: #7897ab;
            top: 600px;
            left: 300px;
        }
        50% {
            background: #11468f;
            top: 450px;
            left: 300px;
        }
        60% {
            background: #694e4e;
            top: 450px;
            left: 600px;
        }
        70% {
            background: #24a19c;
            top: 10px;
            left: 900px;
        }
        80% {
            background: lightgreen;
            top: 700px;
            left: 1500px;
        }
        100% {
            background: #4fbdba;
            top: 20px;
            left: 300px;
        }
    }
`;

const AnimatedShapes = () => {
    return (
        <>
            <Square />
            <Circle />
            <Circle2 />
            <Circle3 />
        </>
    );
};

export default AnimatedShapes;
