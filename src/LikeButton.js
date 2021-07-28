import React, {Component} from 'react';
import {Button,Badge} from 'react-bootstrap';

export default class LikeButton extends Component{
    constructor(props){
        super(props)
        this.state= {
            count: 0,
          
        }
    }

    handleClick=()=>{
        this.setState((prevState)=>({
            count: prevState.count +1
        })
           
        )
    }
   handleSubmit=(e)=>{
    e.preventDefault()
       fetch('http://localhost:3003/liked',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            
                count: [this.state.count]
            })
        })
      
    }


    render(){
    
        console.log(this.props)
        return(
            <div className='flex h screen'>
                <div className='m-auto'>
                    <form onSubmit={this.handleSubmit}>
                <Button onClick={this.handleClick} variant="primary">
            LIKE ME IF YOU LOVE ME <Badge className='badge'bg="secondary">{this.state.count}</Badge>
  <span className="visually-hidden">unread messages</span>
</Button>
</form>
            </div>
            </div>
        )
    }
}