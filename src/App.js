import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import routes from './routes'

class App extends Component {
   render() {
      return (
         <Router>
            <Menu />
            <div className='container'>
               <Switch>{routes}</Switch>
            </div>
         </Router>
      )
   }
}

export default App
