import React from 'react';
import "./Header.css";

const Header = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg " style={{ background: "#940741",}}>
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">PUST</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto my-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Academic
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/">Departments</a></li>
                    <li><a className="dropdown-item" href="/">Faculty</a></li>
                    <li><hr className="dropdown-divider" /></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero">
              <h3>Pabna University of Science and Technology Teachers Information and Salary Sheet.  </h3>
              <h3>Total Teachers Salary:1010000 </h3>
          </div>
      </>
    );
};

export default Header;