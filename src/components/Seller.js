import React from 'react';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { sellers, items } from '../data';

import ListingGrid from './ListingGrid';

const FruitGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;

`
const StyledFruitBox = styled.div`
    max-width: 256px;
    max-height: 256px;
    padding: 24px;
    border: 2px solid #402ac0;
    border-radius: 6%;
    margin: 8px;
    text-align: center;
    background-color: #adb0d4;

`

const FruitPic = styled.img`
    height: 192px;
    width: 192px;
    border-radius: 13%;
    border: 2px solid #000999;

`

const FruitStore = styled.div`
    background-color: rgb(142, 238, 150);
    padding: 32px;
    border: 2px solid black;
    border-radius: 15px;

    p {
        font-size: 18px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

`

const itemList = Object.values(items);

function Seller() {
    const {sellerId} = useParams();
    const merchant = sellers[`${sellerId}`];
    const selection = itemList.filter(item => {
        return item.sellerId === sellerId;
    })
    return(
        <FruitStore>
            <p>Welcome to {merchant.storeName}'s page!</p>
            <p> We Offer Only the Finest Fruits:</p>
                {console.log("items list " + itemList )}
                {console.log("selections: " + selection)}
                <ListingGrid itemList={selection} />
        </FruitStore>
    )
};

export default Seller;