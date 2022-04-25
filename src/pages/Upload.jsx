import React from "react";

function Contact(){
    return(
        <div className="cnt__wrap">
            <div className="cnt_wrapper">
                <h6>get in touch</h6>
                <h2>say hello</h2>
                <p>If you’d like to get in touch with me or the team, you can use the form below or reach out directly to info@hunteryeany.com.</p>
                <div className="form__wrapper">
                    <form action="">
                        <div className="">
                          <input type="text" />
                          </div>
                          <div className="">
                          <input type="text" />
                          </div>
                          <div className="">
                          <input type="text" />
                          </div>
                          <div className="">
                          <input type="text" />
                          </div>
                          <button className="btn btnPrimary"></button>
                       
                    </form>
                </div>

            </div>
        </div>
    )
}


export default Contact