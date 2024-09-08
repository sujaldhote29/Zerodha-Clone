import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-5  border-top'>
                <h1 className=' text-center mt-5'>
                    People
                </h1>
            </div>
            <div className='row p-3  text-muted fs-6' style={{ lineHeight: "1.8", fontSize: "1.2rem" }}>
                <div className='col-6 p-5 text-center'>
                    <img src='media/images/nithinkamath.jpg' alt='image' style={{ borderRadius: "100%", width: "50%" }}></img>
                    <div className='mt-5'><h4>Nitin Kamath</h4></div>
                    <h6>Founder,CEO</h6>
                </div>
                <div className='col-6 p-3'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>

                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>

                    <p>
                        Playing basketball is his zen.
                    </p>

                    <p>
                        Connect on <a href='https://nithinkamath.me/' style={{ textDecoration: "none" }}>Homepage</a> / <a href='https://tradingqna.com/u/nithin/summary' style={{ textDecoration: "none" }}> TradingQnA</a> / <a href='https://x.com/Nithin0dha' style={{ textDecoration: "none" }}>Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;