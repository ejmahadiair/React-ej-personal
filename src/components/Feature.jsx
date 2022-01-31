import React from "react";
import styled from "styled-components";
import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";
const Container = styled.div`
    display: flex;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
        padding: 30px 20px;
    }
`;
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;
const Image = styled.img`
    width: 80%;
`;
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    @media only screen and (max-width: 1030px) {
        width: 100%;
    }
`;
const Title = styled.div`
    font-size: 70px;
    @media only screen and (max-width: 1030px) {
        font-size: 40px;
        width: 100%;
    }
`;
const Subtitle = styled.div`
    font-size: 30px;
    font-style: italic;
    margin-top: 20px;
    color: #333;
    @media only screen and (max-width: 1030px) {
        font-size: 20px;
    }
`;
const Description = styled.p`
    font-size: 20px;
    margin-top: 30px;
    color: #555;
    @media only screen and (max-width: 1030px) {
        font-size: 15px;
    }
`;
const Button = styled.button`
    width: 170px;
    padding: 15px;
    border: none;
    background: darkblue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
`;
const Feature = () => {
    return (
        <Container id="Feature">
            <Left>
                <Image src={App} />
            </Left>
            <Right>
                <Title>
                    <b>Good</b> Services <br />
                    <b>Good</b> Communication <br />
                </Title>
                <Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Subtitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, consectetur similique! Consequuntur obcaecati ad
                    velit adipisci consectetur, ut maiores expedita quis
                    ratione, aperiam, voluptas commodi ab sit impedit cum
                    quibusdam!
                </Description>
                <Button>For more information</Button>
            </Right>
            <AnimatedShapes />
        </Container>
    );
};

export default Feature;
