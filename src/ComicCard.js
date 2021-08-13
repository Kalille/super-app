import React, {Component} from 'react';
import {Card} from 'react-bootstrap';


 export default class ComicCard extends Component{
       render(){
           console.log(this.props.comics)
           return(
               <div>
                   {this.props.comics.map((comic,index)=>{
                
                       return(
                           <div key={index}>
                                         <br/>
                    <br/>
                    <center>
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}  />
                <Card.Body>
                <Card.Title> {comic.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text> 
                </Card.Body>
                </Card>
                        </center>
                           </div>
                       )
                        })
                 }
               
               </div>
           )
       }
}