/* import React from "react"; */

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="index.html">
            Travesías Viajeras
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link px-lg-3 py-3 py-lg-4" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                  Comparte tu experiencia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Compartenos tu experiencia!!
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <form>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Titulo
              </label>
              <input style={{ borderRadius: "5px", borderColor: "black" }} type="text" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Compartenos tu nombre!
              </label>
              <input
                style={{ borderRadius: "5px", borderColor: "black" }}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Sube la imagen de tu experiencia!
              </label>
              <input
                style={{ borderRadius: "5px", borderColor: "black" }}
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Descripción
              </label>
              <textarea
                name=""
                placeholder="¿A donde fuiste?...¿Que hiciste?"
                style={{ borderRadius: "5px", resize: "none", borderColor: "black" }}
                id=""
                cols="37"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" style={{ borderRadius: "5px" }} className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
