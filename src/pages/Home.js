import React, { Component } from "react";
import Signin from "../components/Signin";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";

import { connect } from "react-redux";
import { GoogleLoginAPI, LoginAPI } from "../api/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      open: false,
      message: "",
    };
    this.changeValue = this.changeValue.bind(this);
  }
  changeValue(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleClick = (state) => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    let redirectToHome;
    let route = "/send-sms";
    let menuItems = [];
    if (this.props.isLoggedIn) {
      for (let i = 0; i < this.props.menuItems.length; i++) {
        if (
          this.props.menuItems[i].perm &&
          this.props.permissions.includes(this.props.menuItems[i].perm)
        ) {
          menuItems.push(this.props.menuItems[i]);
        } else if (this.props.menuItems[i].perm === "") {
          menuItems.push(this.props.menuItems[i]);
        }
      }
      route = menuItems[0] ? menuItems[0].link : "/send-sms";
    }
    if (this.props.isLoggedIn) {
      redirectToHome = <Redirect to={route} />;
    }
    return (
      <div style={{justifyContent: "center", display: "flex", height: "100vh", alignItems: "center"}}>
        {redirectToHome}
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.props.signInFail}
          onClose={this.state.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={
            <span id="message-id">{this.props.signInFailMsg.join(", ")}</span>
          }
        />
        <Signin
          loading={this.props.loading}
          username={this.state.username}
          password={this.state.password}
          changeValue={this.changeValue}
          signin={this.props.signIn}
          googleSignin={this.props.googleSignin}
        />
      </div>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  loading: state.login.loading,
  signInFail: state.login.signInFail,
  signInFailMsg: state.login.signInFailMsg,
  menuItems: state.admin.menuList,
  permissions: state.login.actionPermissions,
});

const mapDispatchToProps = {
  signIn: LoginAPI,
  googleSignin: GoogleLoginAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
