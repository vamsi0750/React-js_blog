import React, { Component } from 'react';


class Img extends Component{
    render(){
      return(
        <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                      <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                      </ol>
                                      <div className="carousel-inner">
                                        <div className="carousel-item active">
                                          <img height="550" width="1350" src="https://images.pexels.com/photos/7059/man-people-space-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/> 
                                        </div>
                                        <div className="carousel-item">
                                          <img  height="550" width="1350" src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                          <img  height="550" width="1350" src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..."/>
                                        </div>
                                      </div>
                                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                      </a>
                                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                      </a>
                                    </div>
                                    <br/>
         
  
          </div>
  
      );
    }
  }

 export default Img; 