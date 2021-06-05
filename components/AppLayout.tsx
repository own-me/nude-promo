import React from "react";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    padding: 50px 20%;
    min-height: 100%;
    color: #2A2825;

    @media screen and (max-width: 2000px) {
        padding: 40px 5%;
    }    
    @media screen and (max-width: 600px) {
        padding: 20px 5%;
    }      
`;

export default function AppLayout({ children }) {
    return (
        <AppLayoutContainer>
            {children}
        </AppLayoutContainer>
    );
};