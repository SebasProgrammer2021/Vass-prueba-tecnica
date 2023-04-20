import backgroundImage from "./static/background-mobile.jpg";
import "./App.css";

import {
  dataEmpresas,
  dataNavbar,
  dataNavbarDropdown,
  dataNavbarStatic,
  dataSiteMapVASS,
  dataTalento,
} from "./data/data";

function App() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-xxl bg-black py-xxl-3">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand text-white" href="#">
              VASS
            </a>
          </div>
          <div>
            <div>
              <img
                className="d-xxl-none"
                src="https://img.icons8.com/sf-regular/48/FFFFFF/search.png"
                height={30}
                width={30}
                id="searchIcon"
              />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <img src="https://img.icons8.com/windows/32/FFFFFF/menu--v1.png" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Casos de éxito
                  </a>
                </li>
                {dataNavbarDropdown.map((item, index) => (
                  <li className="nav-item dropdown" key={index}>
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.value}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
                {dataNavbarStatic.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
                <img
                  className="d-none d-lg-block mt-1"
                  src="https://img.icons8.com/sf-regular/48/FFFFFF/search.png"
                  height={30}
                  width={30}
                  id="searchIcon"
                />
                <li className="nav-item d-none d-xl-block">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Talento
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="backgroundImage"
        />
        {/* <h2 style={{fontSize:"140px"}}>CONTACTO</h2> */}
      </div>
      <div className="ps-3 row secondSectionTextContainer pb-5 ps-5">
        <div className="col-sm-12 col-md-2 col-xxl-4">
          <p className="text-uppercase w-50 fw-bolder firstMiddleLetter">
            Empecemos a hacerlo sencillo
          </p>
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-8">
          <div className="d-flex align-items-center">
            <div className="d-flex me-4" style={{ height: "60px" }}>
              <div className="vr"></div>
            </div>
            <p className="fs-5 w-75">
              Nos emociona impulsar tu transformación digital
            </p>
          </div>
        </div>
      </div>
      <form className="p-5 bg-black text-white">
        <div className="mb-3">
          <input
            className="my-4 w-100"
            placeholder="Nombres y apellidos"
            type="text"
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="my-4 w-100"
            placeholder="Email"
            required
            type="email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <input
            className="my-4 w-100"
            placeholder="Empresa/Organismo"
            required
            type="text"
            id="Empresa/Organismo"
          />
        </div>
        <div className="mb-3">
          <input
            className="my-4 w-100"
            placeholder="País"
            type="país"
            id="País"
          />
        </div>
        <div className="mb-3">
          <input
            className="my-4 w-100"
            placeholder="Teléfono"
            type="tel"
            id="Teléfono"
          />
        </div>
        <div className="my-5">
          <label htmlFor="floatingTextarea">Mensaje:</label>
          <textarea
            className="form-control mt-4"
            placeholder=""
            id="floatingTextarea"
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btnCircle btnBackgroundColor btnColor mt-4"
          >
            Enviar
          </button>
        </div>
      </form>
      {/* <hr className="border border-danger border-2 opacity-50" /> */}
      <footer className="bg-dark text-white mt-1 p-3 pt-md-5">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className="d-flex d-md-block justify-content-end my-5 my-md-0">
              <h3 className="w-25 fs-5">Complex made simple</h3>
              <h3 className="d-none d-md-block mt-5">VASS</h3>
            </div>
          </div>
          <div className="col pb-5">
            <span className="fw-bold">Sitemap VASS</span>
            <div className="pt-3">
              {dataSiteMapVASS.map((item, index) => (
                <p className="m-0" key={index}>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
          <div className="col col-md-">
            <span className="fw-bold">Sitemap Talento</span>
            <div className="pt-3">
              {dataTalento.map((item, index) => (
                <p className="m-0" key={index}>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
          <div className="col pb-5">
            <span className="fw-bold">Empresas</span>
            <div className="pt-3">
              {dataEmpresas.map((item, index) => (
                <p className="m-0" key={index}>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-5 mt-1 bg-dark text-white copyRightFooter">
        <p className="fs-6">Copyright Todos los derechos reservados</p>
        <div className="row pt-4 m-0 grid gap-4">
          <p className="col m-0 text-end">Memoria ambiental</p>
          <p className="col m-0 text-start">Politica de cookies</p>
        </div>
        <p className="m-0">Politica de privacidad</p>
        <p className="m-0">Politica de calidad y medio ambiente</p>
        <div className="container px-5">
          <div className="row align-items-start mt-4">
            <div className="col">
              <img
                className="col"
                src="https://img.icons8.com/material-sharp/24/FFFFFF/twitter.png"
              />
            </div>
            <div className="col">
              <img
                className="col"
                src="https://img.icons8.com/windows/32/FFFFFF/linkedin-2.png"
              />
            </div>
            <div className="col">
              <img
                className="col"
                src="https://img.icons8.com/windows/32/FFFFFF/instagram-new.png"
              />
            </div>
            <div className="col">
              <img
                className="col"
                src="https://img.icons8.com/material-sharp/24/FFFFFF/youtube-play.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
