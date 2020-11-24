import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/Carousel';

const Information = () => {
    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="icon-block">
                            <div className="card" style={{ padding: '10px' }}>
                                <div className="card-title">
                                    <Link to="/news">
                                        <h4
                                            className="center brown-text"
                                            style={{ paddingBottom: '15px' }}
                                        >
                                            Latest News
                                            <i className="material-icons center">
                                                flash_on
                                            </i>
                                        </h4>
                                    </Link>
                                </div>
                                <div className="divider"></div>
                                <Carousel />
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <div className="icon-block">
                            <div className="card" style={{ padding: '10px', paddingBottom: '15px' }}>
                                <div className="card-title">
                                    <h4
                                        className="center brown-text"
                                        style={{ paddingBottom: '16px' }}
                                    >
                                        Categories
                                    </h4>
                                </div>
                                <div className="divider"></div>
                                <div className="row light">
                                    <h4>
                                        <span className="col s3 m3 center">
                                            <i className="material-icons">
                                                video_library
                                            </i>
                                        </span>
                                    </h4>
                                    <h4>
                                        <span className="col s3 m3 center">
                                            <i className="material-icons">
                                                event_note
                                            </i>
                                        </span>
                                    </h4>
                                    <h4>
                                        <span className="col s3 m3 center">
                                            <i className="material-icons">
                                                place
                                            </i>
                                        </span>
                                    </h4>
                                    <h4>
                                        <span className="col s3 m3 center">
                                            <i className="material-icons">
                                                info
                                            </i>
                                        </span>
                                    </h4>
                                </div>
                                <div className="divider"></div>
                                <table className="highlight centered light">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Cadet</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Sub-Junior</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Junior</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Youth</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Men & Women</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/draws">
                                                    <i className="material-icons">
                                                        person
                                                    </i>
                                                </Link>
                                            </td>
                                            <td>Men & Women</td>
                                            <td>
                                                <i className="material-icons pink-text">
                                                    account_circle
                                                </i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
