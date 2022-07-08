import React, { Component } from "react";
import { LogoutAPI } from "../api/auth";
import { connect } from "react-redux";
import SendSMS from "../components/SMS/sendSMS"

class SMS extends Component {
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps) {
    }
    render() {
      return (
          <div>
              <SendSMS/>
          </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
  });
  
  const mapDispatchToProps = {
      logoutAPI: LogoutAPI,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(SMS);