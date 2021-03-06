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
            price:'',
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
              
                .then(data=>{
                   if(data.data.results !== null){
                    
                       this.setState({
                            comics: data.data.results,
                        title: data.data.results[0].title,
                        image: `${data.data.results[0].images[0].path}.${data.data.results[0].images[0].extension}`,
                          id: data.data.results[0].id,
                          price: data.data.results[0].prices[0].price,
                    })
                }})
                .catch(err=>alert('please try again'))
    }
    render(){
       console.log(this.state.comics)
        return(
            <div>
                <br/>
               <Form onSubmit={this.handleSubmit}>
               <Form.Control onSubmit={this.handleSubmit} onChange={this.handelChange} size="md" type="text" placeholder="Enter Marvel comic or character here....." />
               <br/>
               <center><Button as="input" type="submit" value="Search" /></center>
               </Form>
               <ComicCard comics={this.state.comics} title={this.state.title} image={this.state.image} price={this.state.price}/>
            </div>
        )
    }
}
export default Comics