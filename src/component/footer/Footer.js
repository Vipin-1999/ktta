import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer teal">
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div
                            className="col l9 s12"
                            style={{ paddingLeft: '40px' }}
                        >
                            <span className="left">
                                <div>
                                    All contents © KTTA. All rights reserved.
                                </div>
                                Powered by WHIZDATA
                            </span>
                        </div>
                        <div className="col l3 s12" style={{ padding: '5px' }}>
                            {
                            [...new Array(3)].map(() => (
                                <span style={{ padding: '5px' }}>
                                    <i className="material-icons">facebook</i>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
