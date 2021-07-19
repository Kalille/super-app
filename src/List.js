import React, {Component}from 'react';

export default class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <ul> </ul>
            </div>
        )
    }
}