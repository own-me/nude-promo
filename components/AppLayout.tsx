import React from "react";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    padding: 50px 20%;
    min-height: 100%;

    @media screen and (max-width: 600px) {
        padding: 40px 5%;
    }
    @media screen and (max-width: 900px) {
        padding: 40px 5%;
    }
    @media screen and (max-width: 1200px) {
        padding: 40px 5%;
    }
    @media screen and (max-width: 1800px) {
        padding: 40px 5%;
    }            
`;

export default function AppLayout({ children }) {
    return (
        <AppLayoutContainer>
            {children}
        </AppLayoutContainer>
    );
};