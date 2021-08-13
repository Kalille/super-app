import React, {Component} from 'react';
import HeroCard from './HeroCard'
import {Form, Button} from 'react-bootstrap';



class CharacterForm extends Component{

  constructor(){
      super()
      this.state={
          value:'',
          name:'',
          image: '',
          description: ""
      }
  }

  handleChange=(event)=>{
       this.setState({
        value: event.target.value
    })

}

    handleSubmit=(event)=>{
        event.preventDefault()
        fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${this.state.value}&apikey=c9cde59c0f04bf2e0fd8b32ee6b1d609
        `)
        .then(res=>res.json())
       
        .then(data=>{
            
            const wordObject= data.data.results[0]
            this.setState({
               
                name: wordObject.name,
                description: wordObject.description,
                image: `${wordObject.thumbnail.path}.${wordObject.thumbnail.extension}`
            })
        })
        .catch(err=> alert(` Your CLEARLY not a fan... Try Again! `))
        
        
       
      }
        render(){

        return(
            
            <div className='flex h-screen'>
                <br/>
                
                <Form className='m-auto' onSubmit={this.handleSubmit} >   
                <Form.Control className='form' onSubmit={this.handleSubmit} onChange={this.handleChange}  size="md" type="text" placeholder="Enter Marvel character here....." />
                <center> <Button as="input" type="submit" value="Search" /></center> 
                </Form>
                <HeroCard name={this.state.name} 
                image={this.state.image}
                 description={this.state.description === null ? 'not found': this.state.description}
      
         />
            </div>
        )
    }

}


export default CharacterForm