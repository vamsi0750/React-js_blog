import React, { Component } from 'react';


class Navbar extends Component{
    render(){
      return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                  <a className="navbar-brand animated infinite bounce" href="https://www.udemy.com">Vamsi</a>
                                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                  </button>
                                
                                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                      <li className="nav-item active">
                                        <a className="nav-link" href="https://www.udemy.com"><i className="fa fa-home" aria-hidden="true"></i>
                                          Home <span className="sr-only">(current)</span></a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="https://www.udemy.com"><i className="fa fa-info-circle" aria-hidden="true"></i>
                                          About us</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="https://www.udemy.com"><i className="fa fa-phone" aria-hidden="true"></i>
                                              Contact Us</a>
                                        </li>
                                      
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                      <li className="nav-item"><a href="https://www.udemy.com" className="nav-link"><i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                        Log In</a></li>
                                      <li className="nav-item"><a href="https://www.udemy.com" className="nav-link"><i className="fa fa-user-plus" aria-hidden="true"></i>
                                        Sign In</a></li>
                                      <li></li>
                                    </ul>
                          
                          
                                    
                                  </div>
                                </nav>
         
  
        </div>
  
      );
    }
  }

export default Navbar;  