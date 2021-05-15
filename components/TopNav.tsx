import React from "react";
import styled from "styled-components";
import logo from "../media/logo.svg";
import { navItems } from "../constants";

const TopNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const BrandContainer = styled.div`
`;

const BrandLogo = styled.img`
`;

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins, Open Sans;
    font-size: 25px;
    color: #2A2825;
`;

const NavLink = styled.span`
    margin: 0 20px;
    cursor: pointer;
`;

export default function TopNav() {
    return (
        <TopNavContainer>
            <BrandContainer>
                <BrandLogo src={logo} />
            </BrandContainer>
            <NavLinksContainer>
                {
                    navItems.map((link, index) => {
                        return <NavLink key={index}>{link.title}</NavLink>
                    })
                }
            </NavLinksContainer>
        </TopNavContainer>
    );
};