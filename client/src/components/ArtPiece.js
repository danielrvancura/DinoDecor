import React from 'react';

const ArtPiece = (props) => {
    const href = "item/" + props.piece.id;
    return (
        <div>
            <a href={href}>
                <h3>"{props.piece.name}" by {props.piece.artist} for {props.piece.price}</h3>
            </a>
        </div>
    )
}

export default ArtPiece;