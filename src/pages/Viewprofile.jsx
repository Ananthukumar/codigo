import React from "react";
import Pro from "../assets/pro.png";

function ViewProfile() {
    return (
        <div>
        <div className="view__profile__wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="profie__box d-flex justify-content-end">
                        <img src={Pro} className="" alt="" width={150} height={150} />
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="txt__wrap">
                            <h2>Ananthu Kumar</h2>
                            <button className="btn btn-edit">Edit Profile</button>
                            <p className="pt-3">Download free, beautiful high-quality photos created by Ananthu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="profile__collections">
            <div className="">
                <ul className="">
                    <li><a href="">Photos</a></li>
                    <li><a href="">Likes</a></li>
                    <li><a href="">Collections</a></li>
                    
                </ul>
            </div>
        </div>
        <div className="py-5"></div>
        </div>
    )
}

export default ViewProfile