import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import logo from '../../ktta_logo.jpg';

const Navbar = () => {
    return (
        <div>
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <span className="left">
                        <a href="#!" className="brand-logo">
                            <img
                                src={logo}
                                alt="Logo"
                                style={{ maxWidth: '60px', paddingTop: '5px' }}
                            />
                        </a>
                    </span>
                    <span>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link
                                    to="/"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a
                                    class="dropdown-trigger blue-grey-text text-darken-3"
                                    href="#"
                                    data-target="dropdown1"
                                >
                                    About
                                </a>

                                <ul
                                    id="dropdown1"
                                    class="dropdown-content blue-grey teal-text text-lighten-2"
                                >
                                    <li>
                                        <Link to="/ktta">KTTA</Link>
                                    </li>
                                    <li>
                                        <Link to="/officebearers">
                                            Office Bearers
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link
                                    to="/players"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Players
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/photos"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    class="waves-effect btn modal-trigger teal lighten-2 blue-grey-text text-darken-3"
                                    href="#modal1"
                                >
                                    Register
                                </a>
                                <div id="modal1" class="modal" style={{padding: '10px'}}>
                                    <div class="modal-content blue-grey-text text-darken-3">
                                        <h4>Player Registration</h4>
                                        <p>A bunch of text</p>
                                    </div>
                                    <div class="modal-footer">
                                        <a
                                            href="#!"
                                            class="modal-close waves-effect teal lighten-2 btn-flat"
                                        >
                                            Agree
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li>
                                <Link
                                    to="/"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="blue-grey-text text-darken-3"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/players"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Players
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/photos"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="blue-grey-text text-darken-3"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="waves-effect waves-light btn blue-grey-text text-darken-3"
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                        <a
                            href="#"
                            data-target="nav-mobile"
                            className="sidenav-trigger"
                        >
                            <i className="material-icons">menu</i>
                        </a>
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
