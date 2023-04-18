import backgroundImage from "./static/background-mobile.jpg";
import "./App.css";

import { dataEmpresas, dataSiteMapVASS, dataTalento } from "./data/data";

function App() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            VASS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <img src={backgroundImage} className="img-fluid" alt="backgroundImage" />
      <div className="ps-3">
        <p className="text-uppercase mt-5 w-50">Empecemos a hacerlo sencillo</p>
        <p className="text-uppercase w-75">
          Nos emociona impulsar tu transformación digital
        </p>
      </div>
      <form className="p-5 bg-black text-white">
        <div className="mb-3 mt-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombres y apellidos
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Empresa/Organismo
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            País
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Teléfono
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <hr className="border border-danger border-2 opacity-50" />
      <footer className="container bg-dark text-white">
        <h3>Complex made simple</h3>
        <div className="">
          <div className="row">
            <div className="col-6">
              Sitemap VASS
              <div className="pt-3">
                {dataSiteMapVASS.map((item, index) => (
                  <p className="m-0" key={index}>
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-6">
              Sitemap Talento
              <div className="pt-3">
                {dataTalento.map((item, index) => (
                  <p className="m-0" key={index}>
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
            <div className="col py-5">
              Empresas
              <div className="pt-3">
                {dataEmpresas.map((item, index) => (
                  <p className="m-0" key={index}>
                    {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-danger border-2 opacity-50" />
        <div className="text-center pb-5">
          <h6>Copyright Todos los derechos reservados</h6>
          <div className="row pt-4 m-0">
            <p className="col m-0">Memoria ambiental</p>
            <p className="col m-0">Politica de cookies</p>
          </div>
          <p className="m-0">Politica de privacidad</p>
          <p className="m-0">Politica de calidad y medio ambiente</p>
          <div className="mt-4">Social networks</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
