import React from 'react';
import SocialCard from './Social_Card';

const Social_Page = () => {
    return (
        <div className="row">
            <div className="col m2"></div>
            <div className="section">
                <div className="row">
                    <SocialCard title="Facebook" />
                    <SocialCard title="Twitter" />
                    <SocialCard title="Instagram" />
                </div>
            </div>
            <div className="col m2"></div>
        </div>
    );
};

export default Social_Page;
