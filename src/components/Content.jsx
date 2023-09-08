/* import React from "react"; */
import img from "../assets/images/fondo.jpg";
const Content = () => {
  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-12">
            <div className="post-preview">
              <div className="row">
                <div className="col-6" style={{ justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                  <img src={img} className="img-fluid rounded" alt="" srcSet="" />
                </div>
                <div className="col-6">
                  <a href="post.html">
                    <h3 className="post-title">Man must explore, and this is exploration at its greatest</h3>
                    <p className="post-subtitle">Problems look mighty small from 150 miles up</p>
                  </a>
                  <p className="post-meta">
                    Posted by:
                    <a href="#!">Start Bootstrap</a>
                    on September 24, 2023
                  </p>
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
