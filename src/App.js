import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import Home from './Home'
import React,{Component} from 'react'
import CharacterForm from './CharacterForm'
import Comics from './Comics'
import CommentForm from './CommentForm'


class App extends Component{

render(){
  
  return(
    <div>
    <Router>
    <div className="App">
      {/* <New/> */}
     <NavBar/>
    <Switch>
      <Route exact path='/CommentForm' component={CommentForm}/>
    <Route exact path='/Home' component={Home}/>
    <Route exact path='/CharacterForm' component={CharacterForm}/>
    <Route exact path='/Comics' component={Comics}/>
    </Switch>
   

    
     
    </div>
    </Router>
  
    </div>
  )
}

}


export default App;
