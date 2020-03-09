import React from 'react'

import styled from 'styled-components';

import ListingGrid from './ListingGrid';

import { items } from '../data'

const StyledHomePage = styled.div`
    background-color: #e9cb84;
    padding: 16px;
    font-size: 16px;
    border-radius: 15px;
    border: 2px solid black;
`

const itemList = Object.values(items);

function Homepage() {
    return (
        <StyledHomePage>
            <h2>Homeslice.</h2>
            <p>
                Fruit emporium sells the finest fruits from this world and beyond.
            </p>
            <p>
                Browse Items:
            </p>
            <ListingGrid itemList={ itemList }/>
        </StyledHomePage>
    )
};

export default Homepage;