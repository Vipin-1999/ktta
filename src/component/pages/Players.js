import React from 'react';

const Players = () => {
    return (
        <div className="container">
            <h2 className="orange-text text-accent-4">
                <u>RANKING PLAYERS</u>
            </h2>
            <br />
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">expand_more</i>KTTA
                        RANKING POINTS 2019
                    </div>
                    <div className="collapsible-body">
                        <table className="highlight">
                            <thead>
                                <tr>
                                    <th>Sl No</th>
                                    <th>Name</th>
                                    <th>Academy</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...new Array(4)].map((i) => (
                                    <tr>
                                        <td>{i}</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">expand_more</i>KTTA
                        RANKING POINTS 2020
                    </div>
                    <div className="collapsible-body">
                        <ul class="collapsible popout">
                            {[...new Array(10)].map((i) => (
                                <li>
                                    <div class="collapsible-header">
                                        <i class="material-icons">
                                            filter_drama
                                        </i>
                                        First
                                    </div>
                                    <div class="collapsible-body">
                                        <table className="highlight">
                                            <thead>
                                                <tr>
                                                    <th>Sl No</th>
                                                    <th>Name</th>
                                                    <th>Academy</th>
                                                    <th>Points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[...new Array(4)].map((i) => (
                                                    <tr>
                                                        <td>{i}</td>
                                                        <td>Alvin</td>
                                                        <td>Eclair</td>
                                                        <td>$0.87</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Players;
