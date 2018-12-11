import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Error from './components/error';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TicTacToe from './components/ticTacToe';
import GitHubIcon from './components/icons/GitHub_Logo.png';
import LinkedIcon from './components/icons/linkedinlogo.svg';


class App extends Component {
  state = {
    atTop: true
  }
  render() {
    const appBarColor = this.state.atTop ? '#a3d7f7' : '#dbdbdb'; 
    console.log(appBarColor); 
    return (
      <BrowserRouter onUpdate = {() => window.scrollTo(0,0)}>
        <div style = {{position: 'relative', height: '100vh', overflow: 'scroll'}}>
          <AppBar position = "fixed" style = {{backgroundColor: appBarColor, display: 'flex'}}>
            <Toolbar>
              <NavLink to = "/" style = {{textDecoration: 'none', flex: 1}}>
                <Typography variant = "title" style = {{color: '#232323', marginRight: 25, fontFamily: 'Roboto'}}> 
                  Project Portfolio 
                </Typography>
              </NavLink>
              <div style = {{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                <a href = "https://github.com/jglozano151" style = {{height: 30}}>
                  <img src = {GitHubIcon} style = {{height: 30, width: 75, marginRight: 15}}/>
                </a>
                <a href = "https://www.linkedin.com/in/joseph-lozano-651900132/"> 
                  <img src = {LinkedIcon} style = {{height: 30, width: 30}}/>
                </a>
              </div> 
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/tic_tac_toe" component = {TicTacToe}/>
            <Route component = {Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
