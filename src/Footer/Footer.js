import React from "react";
import './Footer.css';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{
                color: "White",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                Ride Buddy
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        {/* geeks for geeks */}
                        {/* <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                    </Column>
                </Row>
                <Heading className="privacy">&copy;{new Date().getFullYear()} RIDE BUDDY | All rights reserved |Terms Of Service | Privacy</Heading>
            </Container>
        </Box>
    );
};
export default Footer;
