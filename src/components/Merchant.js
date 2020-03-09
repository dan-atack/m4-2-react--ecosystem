import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { sellers } from '../data';

function Merchant() {

    const { alice, bob } = sellers;

    return (
        <div>
            <p>Here are our humble merchants:</p>
            <Link to={`/merchants/${alice.id}`}>
             {alice.storeName}
            </Link>
            <p></p>
            <p>
            <Link to={`/merchants/${bob.id}`}>
             {bob.storeName}
            </Link>
            </p>
        </div>
    )
};

export default Merchant;