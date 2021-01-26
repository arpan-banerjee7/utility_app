import React from "react";
import './Header.css';
import NavDropdown from './NavDropDown';
function Header(){
    return(
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand fontStyle-nav-brand" href="/">UTiliTy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0 mr-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Find tools..." aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Find Tools</button>
                  </form>
                  <ul className="navbar-nav ">
                    <NavDropdown name="All Tools">
                    <a className="dropdown-item" href="/">Word To PDF</a>
                    <a className="dropdown-item" href="/">PDF To Word</a>
                    <a className="dropdown-item" href="/">Compress PDF</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">JPG To PDF</a>
                    <a className="dropdown-item" href="/">PDF To JPG</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">JSON Formatter</a>
                    <a className="dropdown-item" href="/">JSON Minifier</a>
                    <a className="dropdown-item" href="/">JSON Unformatter</a>
                    </NavDropdown>
                      

                      
                    <li className="nav-item active">
                      <a className="nav-link fontStyle-nav-item" href="/">Login <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fontStyle-nav-item" href="/">SignUp</a>
                    </li>
                   
                  </ul>
                  
                </div>
              </nav>
            </div>
    )
};

export default Header;