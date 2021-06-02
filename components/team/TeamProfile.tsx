import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 50px;
`;

const ProfileImage = styled.img<{ $color: string }>`
    height: 300px;
    width: 300px;
    border-radius: 100%;
    border: 8px solid ${props => props.$color};
    margin-bottom: 20px;
`;

const ProfileTextContainer = styled.div`
    
`;

const ProfileName = styled.div`
    font-family: Yeseva One, Open Sans;
    font-size: 25px;
`;

const ProfileTitle = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 20px;
`;

export default function TeamProfile({ name, image, title, color }) {
    return (
        <ProfileContainer>
            <ProfileImage src={image} $color={color} />
            <ProfileTextContainer>
                <ProfileName>{name}</ProfileName>
                <ProfileTitle>{title}</ProfileTitle>
            </ProfileTextContainer>
        </ProfileContainer>
    );
};