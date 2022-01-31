import "./App.css";
import "../src/style.css";
import styled, { css } from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Feature from "./components/Feature";
import Services from "./components/Sevice";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    scroll-behavior: smooth;
`;
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;
const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 50% 100%);
    background: crimson;
`;
const FitureShape = styled.div`
    ${Shape}
    clip-path: polygon(0% 0%, 50% 0%, 34% 100%, 0% 100%);
    background: pink;
`;
const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(0% 0%, 34% 0%, 34% 100%, 0% 100%);
    background: #f88497;
`;
const PriceShape = styled.div`
    ${Shape}
    clip-path: polygon(34% 0%, 100% 0%, 100% 100%, 67% 100%);
    background: crimson;
`;
const App = () => {
    const SmallScreen = window.screen.width <= 1030 ? true : false;
    return (
        <html>
            <Navbar />
            <Container>
                <Intro />
                <IntoShape />
            </Container>
            <Container>
                <Feature />
                <FitureShape />
            </Container>
            <Container>
                <Services />
                {!SmallScreen && <ServiceShape />}
            </Container>
            <Container>
                <Price></Price>
                <PriceShape />
            </Container>
            <Container>
                <Contact />
                <Footer />
            </Container>
        </html>
    );
};

export default App;
