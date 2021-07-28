import React, {Component} from 'react';
import {Form, Button,Row,Col} from 'react-bootstrap';
import CommentList from './CommentList';

export default class CommentForm extends Component{
    constructor(){
        super()
        this.state={
            favoriteCharacter: '',
            FavoriteComic: '',
            comment:''
        }

    }
    componentDidMount(){

    }

    handleSubmit=(e)=>{
       
           fetch('http://localhost:3003/favs',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                
                    favoriteCharacter: this.state.firstname,
                    FavoriteComic:   this.state.lastname,
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
    handleChange2=(e)=>{
      
        this.setState({
          
           lastname: e.target.value
           
        })
    }
    handleChange3=(e)=>{
      
        this.setState({
          
           comment: e.target.value
           
        })
    }
    render(){console.log(this.state)
        return(
            <div>
               <br/>
               <Form onSubmit={this.handleSubmit} >
  <Row>
    <Col>
      <Form.Control onChange={this.handleChange1} placeholder="Favorite Character" />
    </Col>
    <Col>
      <Form.Control onChange={this.handleChange2} placeholder="Favorite Comic" />
    </Col>
 
  </Row>
  <Form.Control as='textarea' onChange={this.handleChange3} placeholder="Tell us why...." >

  </Form.Control>
  <Col>
       <Button type='submit'variant="primary">SUBMIT</Button>
    </Col>
</Form>
            <CommentList 
            char={this.state.favoriteCharacter}
            comic={this.state.FavoriteComic}
            comment={this.state.comment}/>
            </div>
        )
    }
}