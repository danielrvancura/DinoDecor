import React from 'react';

const Item = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-5'>
                    <h1>This is placeholder content asdfasdfasdf</h1>   
                </div>
                <div className='col-md-7'>
                    <h1>A Study in Bison</h1>
                    <h3>by Sam Caveman</h3>
                    <h2>Price: $156,000,000</h2>
                    <button className='btn btn-primary'>Add to Cart</button>
                    <button className='btn btn-primary'>Favorite</button>
                </div>
            </div>
            <div className="row">
                <div className='col-md-5'>
                    <h4>Description</h4>
                    <p>Duis cursus nec libero in efficitur. Nunc mauris lacus, lobortis ac quam sed, commodo cursus odio. Morbi consequat a est id viverra. Nunc mattis mauris quis felis feugiat varius. Nam nec neque a erat convallis pretium eu eu urna. In hac habitasse platea dictumst. Pellentesque metus dui, iaculis ac efficitur eu, fringilla at nisl. Nulla facilisi. Praesent nec eros id diam accumsan varius.</p>
                </div>
                <div className='col-md-7'>
                    <h4>About the artist</h4>
                    <p>Duis cursus nec libero in efficitur. Nunc mauris lacus, lobortis ac quam sed, commodo cursus odio. Morbi consequat a est id viverra. Nunc mattis mauris quis felis feugiat varius. Nam nec neque a erat convallis pretium eu eu urna. In hac habitasse platea dictumst. Pellentesque metus dui, iaculis ac efficitur eu, fringilla at nisl. Nulla facilisi. Praesent nec eros id diam accumsan varius.</p>
                </div>
            </div>
        </div>
    )
}

export default Item