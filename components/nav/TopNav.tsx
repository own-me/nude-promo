import React from "react";
import styled from "styled-components";
import logo from "../../media/logo.svg";
import { navItems } from "../../constants";

const TopNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const BrandContainer = styled.div`
`;

const BrandLogo = styled.img`
    @media screen and (max-width: 600px) {
        height: 50px;
    }
`;

const NavLinksContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Poppins, Open Sans;
    font-size: 25px;
    color: #2A2825;
    @media screen and (max-width: 1200px) {
        display: none;
    }
`;

const NavLink = styled.span`
    margin: 0 20px;
    cursor: pointer;
    border-bottom: 3px transparent solid;
    transition: all 0.5s ease-out;

    :hover {
        border-bottom: 3px #b569f8 solid;
    }
`;

export default function TopNav() {

    const scrollToSection = (item) => {
        let elem = null;
        switch (item) {
            case 'Our Dream': {
                elem = document.getElementById('main-features');
                break;
            }
            case '$NUDE': {
                elem = document.getElementById('token-talk');
                break;
            }
            case 'Team': {
                elem = document.getElementById('team');
                break;
            }
            case 'Funding': {
                elem = document.getElementById('funding');
                break;
            }
            case 'Get Involved': {
                elem = document.getElementById('footer');
                break;
            }
            default: {
                break;
            }
        }
        window.scrollTo({
            top: window.pageYOffset + elem.getBoundingClientRect().top - 80,
            behavior: 'smooth'
        });
    }

    return (
        <TopNavContainer>
            <BrandContainer>
                <BrandLogo src={logo} />
            </BrandContainer>
            <NavLinksContainer>
                {
                    navItems.map((link, index) => {
                        return <NavLink key={index} onClick={() => scrollToSection(link.title)}>{link.title}</NavLink>
                    })
                }
            </NavLinksContainer>
        </TopNavContainer>
    );
};