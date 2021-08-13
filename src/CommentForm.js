import React, {Component} from 'react';
import {Form, Button,Row,Col} from 'react-bootstrap';
import CommentList from './CommentList';

export default class CommentForm extends Component{
    constructor(){
        super()
        this.state={
            favoriteCharacter: '',
         
            comment:''
        }

    }
    

    handleSubmit=(e)=>{
       
           fetch('http://localhost:3000/favs',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                
                    favoriteCharacter: this.state.firstname,
                   
                    comment: this.state.comment
                })
            })
            .then((res)=> console.log(res))
            
          
        }


    handleChange1=(e)=>{
      
        this.setState({
           firstname: e.target.value,
         
           
        })
    }
  
    handleChange3=(e)=>{
      
        this.setState({
          
           comment: e.target.value
           
        })
    }
    render(){
        return(
            <div>
               <br/>
               <Form onSubmit={this.handleSubmit} >
  <Row>
    <Col>
      <Form.Control onChange={this.handleChange1} placeholder="Favorite Character" />
    </Col>
   
  </Row>
  <Form.Control as='textarea' onChange={this.handleChange3} placeholder="Tell us why...." >

  </Form.Control>
  <Col>
    <center> <Button type='submit'variant="primary">SUBMIT</Button></center> 
    </Col>
</Form>
            <CommentList 
            char={this.state.favoriteCharacter}
           
            comment={this.state.comment}/>
            </div>
        )
    }
}