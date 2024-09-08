import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageURL} alt='img' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>
                        {productDescription}
                    </p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='image'></img></a>
                        <a href={appStore}><img src='media/images/appStoreBadge.svg' style={{ marginLeft: "50px" }} alt='image'></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;