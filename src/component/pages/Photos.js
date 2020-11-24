import React from 'react';
import Carousel from '../carousel/Carousel';

const Photos = () => {
    return (
        <div className="row">
            <br />
            <div className="col m1"></div>
            <div className="card col s12 m4">
                <h3>Press Coverage</h3>
                <div className="divider"></div>
                <Carousel />
            </div>
            <div className="col m2"></div>
            <div className="card col s12 m4">
                <h3>Photo Gallery</h3>
                <div className="divider"></div>
                <Carousel />
            </div>
            <div className="col m1"></div>
        </div>
    )
}

export default Photos;