import React, {Component} from 'react';
import { Form, Button} from 'react-bootstrap';
import ComicCard from './ComicCard';


class Comics extends Component{
    constructor(){
        super()
        this.state={
            comics: [],
            input: '',
            title: '',
            image: '',
            
         
        }
    }
    handelChange=(e)=>{
        this.setState({
            input:  e.target.value,
        })
        
    }
    
    handleSubmit=(e)=>{
        e.preventDefault()
        
                fetch(`https://gateway.marvel.com:443/v1/public/comics?title=${this.state.input}&limit=10&apikey=c9cde59c0f04bf2e0fd8b32ee6b1d609`)
                .then(res=>res.json())
                // .then(data=> console.log(data.data.results[0].id))
                .then(data=>{
                   
                    
                       this.setState({
                            comics: data.data.results,
                        title: data.data.results[0].title,
                        image: `${data.data.results[0].images[0].path}.${data.data.results[0].images[0].extension}`,
                          id: data.data.results[0].id
                    })
                })
                .catch(err=> alert(err))
           
    }
    render(){
        
        const style = {
            background: 'red',
        }
        return(
            <div>
                <br/>
               
               <form onSubmit={this.handleSubmit}>
               <Form.Control onSubmit={this.handleSubmit} onChange={this.handelChange} size="sm" type="text" placeholder="Enter Marvel comic or character here....." />
               <br/>
               <Button onClick={()=>console.log('clicked')}as="input" type="submit" value="Search" />
               {/* <Button onClick={()=>console.log('clicked')} variant="outline-danger">SEARCH</Button>{' '} */}
               </form>
               <ComicCard comics={this.state.comics} title={this.state.title} image={this.state.image}/>
               {/* <h1>{this.state.title}</h1>
             <img src={this.state.image}></img>  */}
            </div>
        )
    }
}
export default Comics