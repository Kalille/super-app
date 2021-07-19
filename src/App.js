import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import React,{Component} from 'react'
import CharacterForm from './CharacterForm'
import Comics from './Comics'


class App extends Component{

render(){
  
  return(
    <Router>
    <div className="App">
     <NavBar/>
    <Switch>
    <Route exact path='/Home' component={Home}/>
    <Route exact path='/CharacterForm' component={CharacterForm}/>
    <Route exact path='/Comics' component={Comics}/>
    </Switch>
   

     
     
    </div>
    </Router>
  )
}

}


export default App;
