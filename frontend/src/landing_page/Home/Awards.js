import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='img'></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>
                        Largest stock broker in India
                    </h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients Contribute to over 15% of all retail order volumes in India by tracing and investing in
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Futures and Options
                                </li>
                                <li>
                                    Commodity and derivatives
                                </li>
                                <li>
                                    Currency derivatives
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    Stock & IPOs
                                </li>
                                <li>
                                    Direct Mutual Fund
                                </li>
                                <li>
                                    Bonds and Govt. Securities
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\images\pressLogos.png' style={{ width: "90%" }}></img>
                </div>
            </div>
        </div >
    );
}

export default Awards;