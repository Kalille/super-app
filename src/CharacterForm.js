import React, {Component} from 'react';
import List from './List'

class CharacterForm extends Component{

  constructor(){
      super()
      this.state={
          value:'',
          name:'',
          image: '',
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
            const jpg = 'jpg'
            const wordObject= data.data.results[0]
            this.setState({
                name: wordObject.name,
                description: wordObject.description,
                image: `${wordObject.thumbnail.path}.${wordObject.thumbnail.extension}`
            })
        })
        
        console.log(this.state.image)
      }
        render(){
            const style = {
                width: '500px',
            }
        return(
            <div >
                <br/>
                <form onSubmit={this.handleSubmit} className= 'form-box'>
                   <label><b>Character Select:</b></label>
                   <input onChange={this.handleChange}type='text'
                   
                   className='serch-box'/>
                   <button onClick={(()=>console.log('clicked'))}>search</button>
                </form>
            <h3>{this.state.name}</h3>
        <h3>{this.state.description}</h3>
         <img src={this.state.image} style={style}></img>
            </div>
        )
    }

}


export default CharacterForm