import React, {Component} from 'react';
import {Card} from 'react-bootstrap';



export default class Image extends Component{
    constructor(){
        super()
        this.state={
            image: []
        }
    }

    componentDidMount(){
        fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${this.props.name}&apikey=c9cde59c0f04bf2e0fd8b32ee6b1d609
        `)
        .then(res=>res.json())
        //   .then((res)=>console.log(res))
        .then(data=>{
            
          
            this.setState({
               
               
                image: `${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`
                
            })
            
        })
        .catch(err=>console.log(err))
      }


    // pics=(name)=>{
    //     this.props.getPicture(name)
    // }
    render(){ console.log(this.state.image)
        return(
            <Card.Img variant="top" src={this.state.image} />
            )
    }
}