import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Admin from './layout/admin';
import ForgotPassword from "./pages/forgotPassword"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './style';

import { connect } from 'react-redux';
import {LogoutAPI, statusAPI} from './api/auth';

class App extends Component {
  componentWillMount() {
    this.props.checkAuth()
  }
  render() {
    return (
      <MuiThemeProvider theme = { theme }>
      <div className="App" style={{justifyContent: "center", height: "100vh", alignItems: "center"}}>
        <Router basename="/">
          <Switch>
            <Route
              path="/" exact
              component={(routeProps) => (<Home {...routeProps} isLoggedIn={this.props.isLoggedIn}/>)}/>
              <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/" component={Admin} logoutAPI={this.props.logoutAPI} />
          </Switch>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
})

const mapDispatchToProps = {
  checkAuth: statusAPI,
  logoutAPI: LogoutAPI
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
