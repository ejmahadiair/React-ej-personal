import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    position: sticky;
    top: 0px;
    z-index: 100;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
    cursor: pointer;
`;
const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media only screen and (max-width: 1030px) {
        display: none;
    }
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    cursor: pointer;
`;
const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;
const Link = styled.a`
    text-decoration: none;
    color: black;
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo id="logo">EJ MAHADI</Logo>
                    <Menu>
                        <MenuItem>
                            <Link href="#Intro">Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#Feature">Features</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#Service">Services</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#Price">Pricing</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#Contact">Contact</Link>
                        </MenuItem>
                    </Menu>
                </Left>
                <Button>Register</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
