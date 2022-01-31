import React, { useState } from "react";
import styled from "styled-components";
import Show from "../img/show.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import VideoPlay from "../Video/EjMahadi.mp4";
const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;
const Image = styled.img`
    display: ${(props) => props.open && "none"};
    width: 100%;
    margin-left: 50px;
`;
const Video = styled.video`
    display: ${(props) => !props.open && "none"};
    width: 50%;
    height: 400px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100px;
    margin: auto;
    @media only screen and (max-width: 480px) {
        height: 40%;
    }
`;
const Right = styled.div`
    width: 50%;
    @media only screen and (max-width: 1030px) {
        width: 100%;
    }
`;
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
    @media only screen and (max-width: 1030px) {
        padding: 20px;
    }
`;
const Title = styled.h1`
    font-size: 20px;
`;
const Description = styled.p`
    color: #555;
    margin-top: 20px;
`;
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;
const Button = styled.button`
    width: 140px;
    margin-top: 50px;
    background: darkblue;
    color: white;
    font-size: 15px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const Icon = styled.img`
    width: 20%;
`;
const Model = styled.div`
    width: 100vw;
    height: 74vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
`;
const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 200px;
    background: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
`;
const Sevice = () => {
    const [open, setOpen] = useState(false);
    const SmallScreen = window.screen.width <= 1030 ? true : false;
    return (
        <Container id="Service">
            <Left>
                <Image open={open} src={Show} />
                <Video open={open} controls src={VideoPlay} />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Here your Services</Title>
                    <Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quae, numquam, excepturi ipsum velit sequi
                        explicabo repellendus quis sunt, dolores et porro.
                        Quaerat numquam explicabo assumenda laboriosam odit
                        aliquam eius deleniti.
                    </Description>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(!open)}>
                        <Icon src={Play} /> Check out
                    </Button>
                </Wrapper>
            </Right>
            {!SmallScreen && open && (
                <Model>
                    <Video open={open} controls src={VideoPlay} />
                    <CloseButton onClick={() => setOpen(false)}>
                        Close
                    </CloseButton>
                </Model>
            )}
        </Container>
    );
};

export default Sevice;
