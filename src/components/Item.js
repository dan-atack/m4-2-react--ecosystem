import React from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { items, sellers } from '../data';

import BuyButton from './BuyButton';

const FruitStyle = styled.div`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: teal;
    padding: 24px;
    border-radius: 4%;
    margin-top: 16px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`

const FruitPic = styled.img`
    height: 256px;
    width: 256px;
    border-radius: 13%;
    border: 2px solid #000999;
`

function Item() {
    const {fruitName} = useParams();
    // A couple of extra lines here so that I can have url addresses with the NAMES of the fruits, rather than their letter codes:
    const fruitList = Object.values(items);
    const fruit = fruitList.find(item => item.name === fruitName);
    const merchant = sellers[`${fruit.sellerId}`];
    const { name, latinName, description, imageSrc, countryOfOrigin, price, quantity } = fruit;
    return (
        <FruitStyle>
            <h2>Name: {name}</h2>
            <h3>Sciency Name: {latinName} </h3>
            <FruitPic src={imageSrc} alt={name} />
            <h4> {description} </h4>
            <p>From: {countryOfOrigin}</p>
            <div>
                <BuyButton quantity={quantity} price={price} seller={merchant.storeName}/>
            </div>
                
        </FruitStyle>
    )
};

export default Item;