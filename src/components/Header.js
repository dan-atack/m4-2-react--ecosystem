import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    background-color: lightcoral;
    display: grid;
    grid-template-areas: "logo navs";
    color: white;
    padding-left: 16px;
    text-shadow: 1px 1px black;
    font-size: 32px;
    border: 2px solid rgb(56, 47, 85);
    border-radius: 15px;
`;

const StyledNavs = styled.div`
    margin-top: 64px;
    display: grid;
    grid-template-areas: "home about sellers";
    text-align: center;
    color: white;
    text-decoration: none;

`



function Header() {
    return (
        <StyledHeader>
            <h1>Hungry for Fruit?</h1>
            <StyledNavs>
                <NavLink to="/home" activeStyle={{
                    textDecoration: "none",
                    color: "white"
                }}>Home</NavLink>
                <NavLink to="/about" activeStyle={{
                    textDecoration: "none",
                    color: "white"
                }}>About</NavLink>
                <NavLink to="/merchants" activeStyle={{
                    textDecoration: "none",
                    color: "white"
                }}>Merchants</NavLink>
            </StyledNavs>
        </StyledHeader>    
    )
};

export default Header;