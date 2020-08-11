import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, addCake } from '../store/cake/cakeActions';
import { Button } from 'react-bootstrap';

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h1> With Hooks </h1>
            Navigate to components/HooksCakeContainer.js
            <h2>Number of cakes: {numOfCakes}</h2>
            <Button onClick={() => dispatch(buyCake())} variant="outline-primary">Buy Cake</Button>{' '}
            <Button onClick={() => dispatch(addCake())} variant="secondary">Add Cake</Button>

        </div>
    );
}

export default HooksCakeContainer;