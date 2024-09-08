import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' alt='img'></img>
                    <p className='text-muted text-small'>Thematic investing platform
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{ width: "50%" }} alt='img'></img>
                    <p className='text-muted text-small'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' style={{ width: "50%" }} alt='img'></img>
                    <p className='text-muted text-small m-2'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: "40%" }} alt='img'></img>
                    <p className='text-muted text-small'>Asset managment</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' style={{ width: "40%" }} alt='img'></img>
                    <p className='text-muted text-small'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{ width: "40%" }} alt='img'></img>
                    <p className='text-muted text-small'>Insurance</p>
                </div>
                <button className="p-2 btn btn-primary fs-5" style={{ width: "20%", margin: " 0 auto" }}>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;