import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

function ListingGrid( { itemList } ) {
    return (
        <FruitGrid>
            {itemList.map(item => {
                return (
                    <StyledFruitBox key={item.latinName.replace(" ", "-")}>
                        <p>
                            {item.name}
                        </p>
                        <p>
                            {item.latinName}
                        </p>
                        <Link to={`/fruits/${item.name}`}>
                            <FruitPic src={item.imageSrc} alt={item.name} />
                        </Link>
                    </StyledFruitBox>
                )
            })}
        </FruitGrid> 
    )
};

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            latinName: PropTypes.string.isRequired,
            imageSrc: PropTypes.string.isRequired
        })
    )
};

export default ListingGrid;