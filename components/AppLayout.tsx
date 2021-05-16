import React from "react";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    padding: 50px 20%;

    @media screen and (max-width: 992px) {
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