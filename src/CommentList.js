import React, {Component} from 'react';
import {Card} from 'react-bootstrap';



export default class CommentList extends Component{
    constructor(){
        super()
        this.state={
     data:[]
        }
    }
  componentDidMount(){
 
    fetch(`http://localhost:3000/favs`)
   
    .then(res=>res.json())

    .then(favs=>{
        
      
        this.setState({
           
           data: favs
        })
    })
   
  }

    render(){
        return(
            <div><center>
                <h1><center><b>CHECK OUT WHAT OTHER'S HAD TO SAY</b></center></h1>
                 {this.state.data.map((comic,index)=>{
              
                     return(
                  <div key={index} c>
                                       <br/>
                  <br/>
              <Card className='wrapper'  style={{ width: '20rem' }}>
              
              <Card.Body>
                  <h6><b>CHARACTER NAME</b></h6>
              <Card.Title> {comic.favoriteCharacter}</Card.Title>
              <h6><b>COMMENT</b></h6>
              <Card.Text>{comic.comment}</Card.Text> 
              </Card.Body>
              </Card>
                  </div>
                     )
                })}
                </center> 
             </div>
         )
}}