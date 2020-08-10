import React from 'react';
import { connect } from 'react-redux';
import { buyCake, addCake } from '../store/cake/cakeActions'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);