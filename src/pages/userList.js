import React, { Component } from "react";
import { LogoutAPI } from "../api/auth";
import { connect } from "react-redux";
import List from "../components/userList/list"

class ApList extends Component {
  componentWillMount() {
  }
  componentWillReceiveProps(nextProps) {
    // let change = false;
    // const current = nextProps.details;
    // const old = this.props.details;
    // if (old.page !== current.page) {
    //   change = true;
    // } else if (old.limit !== current.limit) {
    //   change = true;
    // }
    // if (change) {}
  }
  render() {
    return (
        <div>
            <List/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    logoutAPI: LogoutAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApList);
