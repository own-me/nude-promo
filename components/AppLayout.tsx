import React from "react";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
    padding: 50px 20%;
`;

export default function AppLayout({ children }) {
    return (
        <AppLayoutContainer>
            {children}
        </AppLayoutContainer>
    );
};