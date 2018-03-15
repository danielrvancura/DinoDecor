import React, {Component} from 'react';
import Carousel from '../components/Carousel';
const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shakespeare: ''
        }
    }

    render() {
        return (
            <div className='container'>
                <Carousel />
            </div>
        )
    }
}

export default Home;