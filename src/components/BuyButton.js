import React from 'react';

import styled from 'styled-components';

const StyledBy = styled.button`
    background-color: rgb(13, 209, 235);
    border: 2px solid black;
    border-radius: 45px;
    padding: 8px 8px 48px 8px;
    font-size: 18px;

    :hover {
        box-shadow: 0px 0px 8px 8px rgb(35, 182, 226);
    }

`

function BuyButton(props) {
    const { quantity, price, seller } = props;
    if (quantity > 0) {
        return (
            <>
                <StyledBy>
                    <p>BUY NOW!</p>
                    {`${quantity} available for as little as $${price} apiece.`}
                </StyledBy>
                <p> Available from {seller}!</p>
            </>
        )
    } else {
        return (
        <p>Sorry, We're Temporarily Out of Stock :(</p>
        )
    }
};

export default BuyButton;