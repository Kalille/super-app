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
 
    fetch(`http://localhost:3003/favs`)
   
    .then(res=>res.json())
//    .then((res)=>console.log(res))
    .then(favs=>{
        
      
        this.setState({
           
           data: favs
        })
    })
    // .then(data=>{
    //     data.map(fav=>console.log(fav))
    // })
  }

    render(){console.log(this.state.name)
        return(
            <div>
                <h1><b>COMMENTS</b></h1>
                 {this.state.data.map((comic,index)=>{
              
                     return(
                  <div key={index} className='flex h-screen'>
                                       <br/>
                  <br/>
              <Card className='m-auto' style={{ width: '20rem' }}>
              
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
             </div>
         )
}}