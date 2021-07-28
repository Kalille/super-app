import React, {Component} from 'react';
import HomeCard from './HomeCard';




class Home extends Component{
    constructor(){
        super()
        this.state= {
            characters: [],
            name: '',
            // image: '',
        }
    }
   
   
    componentDidMount(){
        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=c9cde59c0f04bf2e0fd8b32ee6b1d609`)
        .then(res=>res.json())
        .then(response=>{
            const wordObject= response.data.results
            
            this.setState({
                // name: wordObject.name,
                characters: wordObject,
                // image:  `${wordObject.thumbnail.path}.${wordObject.thumbnail.extension}`
         } )}
        )
    }
     
    render(){
       
       
        return(
            <div>
                <br/>
                <h1>WeLcOmE CoMiC HeAds!</h1>
        {/* {this.state.characters.map((data, i)=>{
                return (
                <div  key={i}>
                    <br/>
                    <br/>
                <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={`${data.thumbnail.path}.${data.thumbnail.extension}`}  />
                <Card.Body>
                <Card.Title> {data.name}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text> 
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                    {data.name}
                 <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`}/>
                </div>
               
            )

        })} */}
             <HomeCard heroes={this.state.characters} name={this.state.name} image={this.state.characters.image}/>
             {/* <List heroes={this.state.characters} name={this.state.name} image={this.state.characters.image}/> */}
            </div>
        )
    }
}
export default Home