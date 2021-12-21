import React from "react";
import styled from "styled-components";
import questionImage from "../../media/question.svg"

const ProfileContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 50px;
    width: 25%;

    @media screen and (max-width: 600px) {
        margin: 30px 0px;
        width: 100%;
    }
`;

const MissingImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 100%;
    border: 8px solid grey;
    margin-bottom: 20px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
`;

const TextContainer = styled.div`

`;

const LookingFor = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 22px;
    margin-bottom: 5px;
`;

const ProfileTitle = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 18px;
`;

export default function TeamMissing({ title }) {
    return (
        <ProfileContainer>
            <MissingImage src={questionImage} />
            <TextContainer>
                <LookingFor>Looking for...</LookingFor>
                <ProfileTitle>{title}</ProfileTitle>
            </TextContainer>
        </ProfileContainer>
    );
};