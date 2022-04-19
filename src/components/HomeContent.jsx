import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';


function HomeContent() {
    return (
        <div className="container-fluid">
            <div className="grid__wrap">

                <div className="grid__item">
                    <div className="card__item">
                        <figure>
                            <img src={image1} alt="" className="img-fluid" />
                        </figure>
                    </div>
                    <div className="card__item">
                        <figure>
                            <img src={image1} alt="" className="img-fluid" />
                        </figure>
                    </div>
                   
                </div>

                <div className="grid__item">
                <div className="card__item">
                        <figure>
                            <img src={image2} alt="" className="img-fluid" />
                        </figure>
                    </div>
                    <div className="card__item">
                        <figure>
                            <img src={image1} alt="" className="img-fluid" />
                        </figure>
                    </div>
                </div>

                <div className="grid__item">
                <div className="card__item">
                        <figure>
                            <img src={image1} alt="" className="img-fluid" />
                        </figure>
                    </div>
                </div>

                <div className="grid__item">
                     <div className="card__item">
                        <figure>
                            <img src={image3} alt="" className="img-fluid" />
                        </figure>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomeContent
