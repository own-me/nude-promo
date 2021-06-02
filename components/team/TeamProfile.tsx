import React from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`;

const ProfileImage = styled.img<{ $color: string }>`
    height: 200px;
    border-radius: 100%;
    border: 5px solid ${props => props.$color}
`;

const ProfileTextContainer = styled.div`
    
`;

const ProfileName = styled.div`
    
`;

const ProfileTitle = styled.div`
    
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