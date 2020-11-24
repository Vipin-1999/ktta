import React from 'react';
import OfficeBearer from './OfficeBearer';
// import photo_1 from '../../../images/OfficeBearer_1.jpg';

const OfficeBearers = () => {
    return (
        <div className="container">
            <h2 class="header">Office Bearers</h2> <br />
            <div className="row">
                {[...new Array(6)].map((i) => (
                    <OfficeBearer />
                ))}
            </div>
        </div>
    );
};

export default OfficeBearers;
