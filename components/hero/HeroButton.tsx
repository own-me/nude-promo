import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #2FCCFE;
    border: #269ADB solid 1px;
    color: white;
    border-radius: 30px;
    padding: 12px 25px;
    font-family: Yeseva One,Open Sans;
    font-size: 15px;
    cursor: pointer;
`;

export default function HeroButton() {
    return (
        <Button>
            Join our Discord
        </Button>
    );
};