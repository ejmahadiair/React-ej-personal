import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
    height: 90%;
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;
const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 1030px) {
        width: 100%;
    }
`;
const Title = styled.h1`
    text-align: center;
    margin-bottom: 50px;
    margin-top: 0;
    @media only screen and (max-width: 1030px) {
        margin: 20px;
    }
`;
const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;
const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 1030px) {
        height: 50%;
        margin-right: 0;
    }
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width: 1030px) {
        width: 50%;
    }
`;
const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 1030px) {
        padding: 5px;
    }
`;
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;

    @media only screen and (max-width: 1030px) {
        padding: 5px;

        margin: 20px auto;
    }
`;
const Button = styled.button`
    border: none;
    font-size: 16px;
    padding: 15px;
    background: darkblue;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width: 1030px) {
        padding: 5px;
        font-size: 10px;
    }
`;
const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 1030px) {
        width: 100%;
        margin-top: 30px;
    }
`;
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width: 1030px) {
        margin-bottom: 20px;
    }
`;
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 1030px) {
        width: 15px;
    }
`;
const Text = styled.span`
    font-size: 20px;
    @media only screen and (max-width: 1030px) {
        font-size: 14px;
    }
`;
const Contact = () => {
    return (
        <Container id="Contact">
            <Wrapper>
                <FormContainer>
                    <Title>Have any Quary</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="Enter your name" />
                            <Input placeholder="Enter your Email" />
                            <Input placeholder="Subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea placeholder="Write your Message" />
                            <Button type="submit">Send Your Message</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map} />
                        <Text>05 Block B Ashulia Model town 1205, Dhaka</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Phone} />
                        <Text>+8801642167361</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={Send} />
                        <Text>ejmahadiair@gmail.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    );
};

export default Contact;
