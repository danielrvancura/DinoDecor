import React, { Component } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Artists from './pages/Artists';
import Cart from './pages/Cart';
import Item from './pages/Item';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/favorites">Favorites</Link>
                        <Link to="/artists">Artists</Link>
                        <Link to="/cart">Cart</Link>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/artists" component={Artists} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/item" component={Item} />
                </div>
            </Router>
        )
    }
}

export default App;

//<Route path="/Blog" component={  } />
