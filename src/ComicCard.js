import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

 export default class ComicCard extends Component{
   



       render(){
           console.log(this.props)
           return(
              <div>
                   {this.props.comics.map((comic,index)=>{
                
                       return(
                    <div key={index} className='flex h-screen'>
                                         <br/>
                    <br/>
                <Card className='m-auto' style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}  />
                <Card.Body>
                <Card.Title> {comic.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text> 
                </Card.Body>
                </Card>
                    </div>
                       )
                  })}
               </div>
           )
       }
}