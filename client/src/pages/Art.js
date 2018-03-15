import React, { Component } from 'react';
import ArtPiece from '../components/ArtPiece';

class Art extends Component {
    render () {
        const art = this.props.allArt.map((piece) =>{
            return (
                <ArtPiece piece={piece} />
            )
        });

        return(
        <div className='container'>
            <h1>Available Pieces</h1>
            {art}
        </div>
        )
    }
}

export default Art;

