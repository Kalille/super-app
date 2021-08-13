import React, {Component} from 'react';
import {Card} from 'react-bootstrap';


 class HomeCard extends Component{
 
        render(){
      
        return(
            <div className='wrapper'>
                 {this.props.heroes.map((hero, i)=>{
        
            return (
                <div  key={i}>
 
                <Card style={{ width: '20rem'}}>
                <Card.Img className='image' variant="top" src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}  />
                <Card.Body>
                <Card.Title> {hero.name}</Card.Title>
              
                </Card.Body>
                </Card>
                </div>
               
            )

        })}
            </div>
        )
    }
}

export default HomeCard