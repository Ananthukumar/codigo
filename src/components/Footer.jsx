import React from "react";

function footer() {
    return (
        <div>
            <footer className="footer__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h2>CONTENT</h2>
                            <ul className="list-unstyled">
                                <li><a href="">New images</a></li>
                                <li><a href="">The most popular content</a></li>
                                <li><a href="">Search trends</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>INFORMATION</h2>
                            <ul className="list-unstyled">
                                <li><a href="">Plans & pricing</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Sell your content</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>LEGAL</h2>
                            <ul className="list-unstyled">
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">License Agreement</a></li>
                                <li><a href="">Privacy policy</a></li>
                                <li><a href="">Copyright information</a></li>
                                <li><a href="">Cookies policy</a></li>

                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h2>SOCIAL MEDIA</h2>
                            <ul className="list-unstyled">
                                
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="footer__btm text-white">
                            <p>Copyright ©  2010-2022 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer