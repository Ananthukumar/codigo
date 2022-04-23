import React from "react";

function login() {
    return(
        <div className="" style={{position:"relative"}}>
        <div className="login__wrapper">
                    <div className="login__wrap">
                        {/* <div className="text-center mb-4">
                        <a href="/" className="logo"><svg width="50" height="50" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">
                </title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></a>
                        </div> */}
                        <h2 className="text-center">LOG IN</h2>
                        <div className="form__group mb-3">
                            <input type="text" className="form__control" placeholder="First Name" />
                        </div>
                        <div className="form__group mb-3">
                            <input type="text" className="form__control" placeholder="First Name" />
                        </div>
                        <div className="d-grid">
                            <button className="btn__primary">Submit</button>
                        </div>
                        <p className="text-center py-4">Don't have an account? <a href=""> Join</a></p> 
            </div>

          
        </div>

        {/* <div className="login__loop">
                    <div className="text">
                        Provoking the intrepid spirit in everyday people that propels ambition into fruition.
                    </div>
            </div> */}
        </div>
    )
}

export default login