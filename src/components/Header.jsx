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
                    </form>
                </div>
                <ul className="home__left list-unstyled mb-0 ms-3 d-flex align-items-center">
                    <li><a href="/About" className="" >  About Us</a></li> 
                    <li><a href="" className="">  Advertise</a></li>
                    <li><a href="" className=""> Explore</a></li>
                    <li><a href="" className="btn"> Login / sign up</a></li>


                </ul>

            </nav>
        </header>

    )
}




export default Header