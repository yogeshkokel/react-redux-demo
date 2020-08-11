import React from 'react';
import { connect } from 'react-redux';
import { buyCake, addCake } from '../store/cake/cakeActions'
import { Button } from 'react-bootstrap';

function CakeContainer(props) {
    return (
        <div>
            <h1> Without Hooks </h1>
            Navigate to components/CakeContainer.js
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <Button onClick={props.buyCake} variant="outline-primary">Buy Cake</Button>{' '}
            <Button onClick={props.addCake} variant="secondary">Add Cake</Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);