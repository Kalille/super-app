import React, {Component} from 'react';
import HomeCard from './HomeCard';




class Home extends Component{
    constructor(){
        super()
        this.state= {
            characters: [],
            name: '',
          
        }
    }
   
   
    componentDidMount(){
        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=c9cde59c0f04bf2e0fd8b32ee6b1d609`)
        .then(res=>res.json())
        .then(response=>{
            const wordObject= response.data.results
            
            this.setState({
              
                characters: wordObject,
             
         } )}
        )
    }
     
    render(){
       
       
        return(
            <div>
                <br/>
             <center>  <h1>WeLcOmE CoMiC HeAds!</h1>
     
             <HomeCard heroes={this.state.characters} name={this.state.name} image={this.state.characters.image}/>
           
             </center> 
            </div>
        )
    }
}
export default Home