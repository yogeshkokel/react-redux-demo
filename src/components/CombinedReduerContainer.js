import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, addCake } from '../store/cake/cakeActions';
import { buyCandy, addCandy } from '../store/candy/candyActions';
import { Button } from 'react-bootstrap';

function CombinedReduerContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfCandy = useSelector(state => state.candy.numOfCandy)
    const dispatch = useDispatch();
    return (
        <div>
            <h1> Combined Reducer with Hooks </h1>
            Navigate to components/CombinedReduerContainer.js
            <h2>Number of cakes: {numOfCakes}</h2>
            <Button onClick={() => dispatch(buyCake())} variant="outline-primary">Buy Cake</Button>{' '}
            <Button onClick={() => dispatch(addCake())} variant="secondary">Add Cake</Button>
            <br />
            <h2>Number of Candy: {numOfCandy}</h2>
            <Button onClick={() => dispatch(buyCandy())} variant="outline-primary">Buy Candy</Button>{' '}
            <Button onClick={() => dispatch(addCandy())} variant="secondary">Add Candy</Button>

        </div>
    );
}

export default CombinedReduerContainer;