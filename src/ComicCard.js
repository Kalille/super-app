import React, {Component} from 'react';
import {Card} from 'react-bootstrap';


 export default class ComicCard extends Component{
       render(){
        
           return(
               <div className='wrapper'>
                   {this.props.comics.map((comic,index)=>{
                
                       return(
                           <div  key={index}>
                                         <br/>
                    <br/>
                    
                <Card className='comic-card' style={{ width: '20rem' }}>
                <Card.Img  variant="top" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}  />
                <Card.Body>
                <Card.Title> {comic.title}</Card.Title>
                <Card.Text>Price: {this.props.price}</Card.Text> 
                </Card.Body>
                </Card>
                        
                           </div>
                       )
                        })
                 }
               
               </div>
           )
       }
}