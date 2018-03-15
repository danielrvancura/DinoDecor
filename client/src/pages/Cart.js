import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }

    render () {
        return (
            <div className='container'>
                <h1>Cart</h1>
            </div>
        )
    }
}

export default Cart;
