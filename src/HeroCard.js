import React, {Component} from 'react';
import {Card} from 'react-bootstrap';



export default class HeroCard extends Component{

    render(){
        
        return(
            <div className='flex h-screen'>
              
            <Card className='m-auto' style={{ width: '40rem' }}> 
                <Card.Img variant="top" src={this.props.image}  />
                <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text> 
                
               
                </Card.Body>
                
                 </Card>
                </div>
        )
    }
    
}