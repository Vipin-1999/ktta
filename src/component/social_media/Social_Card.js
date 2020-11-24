import React from 'react';
import Carousel from '../carousel/Carousel';

const Social_Card = ({ title }) => {
    return (
        <div className="col s12 m4">
            <div className="icon-block" style={{padding: '10px'}}>
                <div className="card">
                    <div className="card-title" style={{paddingTop: '10px'}}>
                        <h2 className="center brown-text">
                            <i className="material-icons">facebook</i>
                        </h2>
                    </div>
                    <h5 className="center brown-text">{title}</h5>
                    <br />
                    <div className="divider"></div>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Social_Card;
