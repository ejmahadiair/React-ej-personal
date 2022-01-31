import React from "react";
import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.35);
    box-shadow: 3px 3px 26px -3px rgba(0, 0, 0, 0.35);
    background: white;
    padding: 20px;
    border-radius: 10px;
    align-items: center;
    margin-right: 60px;

    @media only screen and (max-width: 1030px) {
        margin-right: 0;
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 10px;
    }
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
`;
const Type = styled.button`
    padding: 10px;
    margin:10px 0;
    border 1.5px solid crimson;
    border-radius: 20px;
    color:crimson;
    background:white;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 30px 0;
`;
const Button = styled.button`
    border: none;
    font-size: 16px;
    padding: 15px;
    background: darkblue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`;
const PriceCard = ({ price, type }) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
            <Type>{type} Plan</Type>
            <List>
                <ListItem>200 Hand-Crafted Templates</ListItem>
                <ListItem>Exclusive Support</ListItem>
                <ListItem>50+ PreBuilt Websites</ListItem>
                <ListItem>Premium Plugins</ListItem>
            </List>
            <Button>Choose service</Button>
        </Container>
    );
};

export default PriceCard;
