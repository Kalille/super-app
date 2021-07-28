import React, {Component}from  'react';
import {Carousel} from 'react-bootstrap';


export default class List extends Component{
    render(){
        return(
          <div>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${this.props.heroes.data.thumbnail.path}.${this.props.heroes.data.thumbnail.extension}`} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{this.props.heroes.data.name}</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item></Carousel.Item>
                </Carousel>
  
          </div> 
        )
    }


}