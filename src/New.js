import React, {Component} from 'react'


export default class New extends Component{
    constructor(){
        super()
        this.state={
            input1: '',
            input2: '',
        }
    }
    handleChange1=(e)=>{
        if (e.target.value.length <= parseInt(this.state.input2) ){
        this.setState({
            
            input1: e.target.value
        })}
    }
    handleChange2=(e)=>{
        this.setState({
            input2: e.target.value
        })
    }

  render(){
      console.log(this.state)
      return(
          <div>
              <input value={this.state.input1} onChange={this.handleChange1}>
              </input>
              <input type='number' onChange={this.handleChange2}></input>
          </div>
      )
  }
}