import React from 'react';

import styled from 'styled-components';

const StyledAbout = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgb(230, 158, 245);
    height: 90vh;
    padding: 32px;
    border-radius: 15px;
    border: 2px solid black;
    h2 {
        
        font-size: 44px;
        color: rgb(10, 3, 34);
        text-shadow: 1px 1px black;
        text-decoration: unset;
    }
`

function About() {
    return (
        <StyledAbout>
            <h2>About</h2>
            <p>
                Fruit emporium is founded on a very simple principle: Fruit is good.
            </p>
            <p>
            We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </p>
        </StyledAbout>
    )
};

export default About;