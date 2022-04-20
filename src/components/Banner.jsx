import React from 'react'

function Banner() {
    return (
        <div>
            <div className='Banner'>
                <div className='Ban__inner'>
                    <h1>Explore Places</h1>
                    <h6>The internet’s source of freely-usable images. </h6>
                    <h6 className='pb-4'> Powered by creators everywhere.</h6>
                    <div className="form__wrap">
                    <input className='form-control' type="text" placeholder='Search' />
                    <span className="search"><svg width="25" height="25" class="DFW_E nT46U VETef" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg></span>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Banner