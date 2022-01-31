import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
        overflow: auto;
    }
`;
const Price = () => {
    return (
        <Container id="Price">
            <PriceCard price="10" type="Basic"></PriceCard>
            <PriceCard price="20" type="Premium"></PriceCard>
            <PriceCard price="30" type="Advanced"></PriceCard>
        </Container>
    );
};

export default Price;
