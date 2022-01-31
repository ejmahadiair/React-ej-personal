import React from "react";
import styled from "styled-components";
import Man from "../img/man2.png";
import AnimatedShapes from "./AnimatedShapes";
const Container = styled.div`
    margin-top: 20px;
    height: calc(100vh - 50px);
    display: flex;
    padding: 10px;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1030px) {
        width: 100%;
        height: 100%;
    }
`;
const Title = styled.h1`
    width: 60%;
    font-size: 60px;
    margin: 0;
    @media only screen and (max-width: 1030px) {
        width: 100%;
        font-size: 50px;
    }
`;
const Description = styled.p`
    width: 60%;
    font-size: 20px;
    @media only screen and (max-width: 1030px) {
        width: 100%;
    }
`;
const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`;
const Button = styled.button`
    cursor: pointer;
    padding: 15px;
    border: none;
    border-radius: 10px;
    background: darkblue;
    color: white;
    font-weight: bold;
    @media only screen and (max-width: 1030px) {
        margin-bottom: 20px;
    }
`;
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone = styled.div`
    color: #f0667d;
    font-weight: bold;
    margin-bottom: 5px;
`;
const ContactText = styled.div`
    color: gray;
`;
const Right = styled.div`
    width: 50%;
    position: relative;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;
const Image = styled.img`
    width: 50%;
    position: absolute;
    top: -20%;
    left: 30%;
`;
const Intro = () => {
    return (
        <Container id="Intro">
            <Left>
                <Title>Wlcome to EJ WOrld</Title>
                <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim voluptates temporibus laboriosam expedita! Quae eum,
                    non ratione obcaecati esse itaque!
                </Description>
                <Info>
                    <Button>Start your jorney</Button>
                    <Contact>
                        <Phone>+8801642167361</Phone>
                        <ContactText>
                            If any quary please send a mail
                        </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Man}></Image>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Intro;
