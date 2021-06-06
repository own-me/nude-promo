import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    min-height: 800px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-family: Poppins, Open Sans;
    margin-top: 50px;

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        flex-direction: column;
        padding: 50px 0px;
    }
    @media screen and (max-width: 600px) {
        padding: 20px 0px;
    }
`;

export default function Card({ title, text, color }) {
    return (
        <CardContainer>

        </CardContainer>
    );
};