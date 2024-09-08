import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4>
                    Support Portal
                </h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-3 m-5' >
                <div className='col-6 mb-5'>
                    <h1 className='fs-3'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder='Eg: how do i activate F&O , why is my order getting rejected...'></input>
                    <br></br>
                    <br></br>
                    <a href='/' style={{ color: "white", fontSize: "18px" }}>Track account opening </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/' style={{ color: "white", fontSize: "18px" }}> Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='/' style={{ color: "white", fontSize: "18px" }}> Intraday margins</a>
                    <br></br>
                    <a href='/' style={{ color: "white", fontSize: "18px" }}>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li> <a href='/' style={{ color: "white" }}>1. Offer for sale (OFS) - September 2024 </a>
                        </li>
                        <br></br>
                        <li><a href='/' style={{ color: "white" }}>2. Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;