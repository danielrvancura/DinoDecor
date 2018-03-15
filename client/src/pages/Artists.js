import React from 'react';
import caveman1 from '../images/cavemen/caveman1.jpg';

const Artists = () => {
    return (
        <div className='container'>
            <h1>Featured Artists</h1>
            <div class="row">
            <div class="col-sm-4">
            <img class="img" src={caveman1} />
            </div>
            <div class="col-sm-8"><p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            </div>
            </div>
        </div>
    )
}

export default Artists;
