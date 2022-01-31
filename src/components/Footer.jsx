import React from "react";
import styled from "styled-components";
const Container = styled.div`
    height: 10%;
    background: #111;
    color: lightgray;
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 480px) {
        padding: 10px;
    }
`;
const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;
const ListItem = styled.li`
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        margin-right: 10px;
        font-size: 14px;
    }
`;
const Copiright = styled.span`
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        font-size: 14px;
    }
`;
const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Direction</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Socity</ListItem>
                </List>
                <Copiright>EJ MAHADI &copy;</Copiright>
            </Wrapper>
        </Container>
    );
};

export default Footer;
