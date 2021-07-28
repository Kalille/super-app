import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

    const link ={
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'darkred',
        textDecoration: 'none',
        color: 'white'
    }

class NavBar extends Component{
    render(){
        return(
            <div>
          
           <NavLink
           to='/Home'
           exact
           style={link}
           activeStyle={{
               background: 'red'
           }}
           >
               HOME
           </NavLink>
           <NavLink
           to='/CharacterForm'
           exact
           style={link}
           activeStyle={{
               background: 'red'
           }}
           >
               CHARACTERS
           </NavLink>
           <NavLink
           to='/Comics'
           exact
           style={link}
           activeStyle={{
               background: 'red'
           }}
           >
               COMICS
           </NavLink>
           <NavLink
           to='/CommentForm'
           exact
           style={link}
           activeStyle={{
               background: 'red'
           }}
           >
               Favorites
           </NavLink>
            </div>
        )
    }
}
export default NavBar