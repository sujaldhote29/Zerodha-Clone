import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* Improved alt text for the image */}
                <img 
                    src='media/images/homeHero.png' 
                    alt=""
                    className='mb-5'
                />
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                {/* Added aria-label for the button for accessibility */}
                <button  
                    className="p-2 btn btn-primary fs-5" 
                    style={{ width: "20%", margin: "0 auto" }} 
                    aria-label="Sign up now for investment opportunities"
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
