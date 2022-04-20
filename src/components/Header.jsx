import React from "react";

function Header() {
    return (
        <header>
            <nav className="header__top">

                <a href="/" className="logo"><svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><title id="unsplash-home">
                </title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></a>

                <div className="header_form">
                    <form action="" className="search__form ">
                        <input type="text" className="form-control" name="" id="" placeholder="Search Your Places" />
                       <span className="search"><svg width="20" height="20" class="DFW_E nT46U VETef" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path></svg></span>
                    </form>
                </div>
                <div className="home__left">
                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                        <li><a href="/About" className="" >  About Us</a></li>
                        <li><a href="" className="">  Advertise</a></li>
                        <li><a href="/Explore" className=""> Explore</a></li>
                    </ul>
                </div>

                <div>
                    <button className="btn__cus"> Login / sign up</button>
                </div>


            </nav>
        </header>

    )
}




export default Header