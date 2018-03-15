import React, { Component } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Art from './pages/Art';
import Artists from './pages/Artists';
import Cart from './pages/Cart';
import Item from './pages/Item';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const allArt = [{
        name: 'Antelope 1',
        artist: 'Frida Kavelo',
        price: '$120,000',
        fileName: 'antelope1.jp',
        id: 1
    },{
        name: 'Beasts',
        artist: 'Frida Kavelo',
        price: '$240,000',
        fileName: 'beasts.JPG',
        id: 2
    },{
        name: 'Bison',
        artist: 'Frida Kavelo',
        price: '$360,000',
        fileName: 'bison.jpg',
        id: 3
    },{
        name: 'Lone Bison',
        artist: 'Leonardo Di Caveman',
        price: '$120,000',
        fileName: 'bison2.jpg',
        id: 4
    },{
        name: 'Standing Bison',
        artist: 'Leonardo Di Caveman',
        price: '$360,000',
        fileName: 'bison3.jpg',
        id: 5
    },{
        name: 'Sling',
        artist: 'Leonardo Di Caveman',
        price: '$240,000',
        fileName: 'catapult.jpg',
        id: 6
    },{
        name: 'Cow',
        artist: 'Rockelle Welch',
        price: '$120,000',
        fileName: 'cattle1.jpg',
        id: 7
    },{
        name: 'Hands',
        artist: 'Rockelle Welch',
        price: '$240,000',
        fileName: 'hands.jpg',
        id: 8
    },{
        name: 'Hedgehogs',
        artist: 'Rockelle Welch',
        price: '$360,000',
        fileName: 'hedgehog.jpg',
        id: 9
    },{
        name: 'Running Horse',
        artist: 'Sam Caveman',
        price: '$120,000',
        fileName: 'horse1.jpg',
        id: 10
    },{
        name: 'Stampede',
        artist: 'Sam Caveman',
        price: '$240,000',
        fileName: 'horse2.jpg',
        id: 11
    },{
        name: 'Stages',
        artist: 'Sam Caveman',
        price: '$360,000',
        fileName: 'horses1.jpg',
        id: 12
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/art">Art</Link>
                        <Link to="/artists">Artists</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/art" component={ () => <Art allArt={allArt} /> } />
                    <Route path="/artists" component={Artists} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/item/:id" component={ () => <Item allArt={allArt} /> } />
                </div>
            </Router>
        )
    }
}

export default App;

//<Route path="/Blog" component={  } />
