import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Snackbar from "@material-ui/core/Snackbar";
import { LogoutAPI } from "../api/auth";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

import ArrowIcon from "@material-ui/icons/KeyboardArrowDown";
import "./layout.css";
import { SelectedRoute } from "../store/actions/common";

const drawerWidth = 230;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    // backgroundColor: '#343a40',
    fontFamily: "sans-serif",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7 + 1),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8 + 1),
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "5px 12px",
    // ...theme.mixins.toolbar,
    paddingTop: 70,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    width: "105%",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 50,
    [theme.breakpoints.up(1000 + theme.spacing(3 * 2))]: {
      flexGrow: 1,
      padding: theme.spacing(1),
      width: 100,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 50,
    },
  },
  grow: {
    flexGrow: 1,
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({}))(MenuItem);

function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = React.useState(true);

  // const handleMenuClick = () => {
  //     setOpen(!open);
  // };

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        //variant="inherent"
        style={{ color: "white", fontWeight: 600 }}
        onClick={handleClick}
      >
        {localStorage.user_id} <ArrowIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={props.logoutAPI}>
          {/* <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon> */}
          <ListItemText primary={"Reset Password"} />
        </StyledMenuItem>
        <StyledMenuItem onClick={props.logoutAPI}>
          {/* <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon> */}
          <ListItemText primary={"Logout"} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

class MiniDrawer extends React.Component {
  state = {
    open: true,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: !this.state.open });
  };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenuItemClick = (subMenu) => {
    this.props.history.push(subMenu.link);
  };
  componentDidMount() {
    let url = window.location.href;
    let last = url ? url.substring(url.lastIndexOf("/")) : "/";
    if (last !== "/") {
      this.props.SelectedRoute(last);
    }
  }

  render() {
    const { classes } = this.props;
    let redirectToHome;
    if (!this.props.isLoggedIn) {
      redirectToHome = <Redirect to="/" />;
    }

    if (!this.props.auth) {
      return <div>Please do login</div>;
    }
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf("/") + 1);
    if (filename !== "/") {
      this.props.SelectedRoute(`/${filename}`);
    }
    let menuItems = [];
    let routes = [];
    for (let i = 0; i < this.props.menuItems.length; i++) {
      if (this.props.menuItems[i].sub === false) {
        if (
          this.props.menuItems[i].perm &&
          this.props.permissions.includes(this.props.menuItems[i].perm)
        ) {
          menuItems.push(this.props.menuItems[i]);
        } else if (this.props.menuItems[i].perm === "") {
          menuItems.push(this.props.menuItems[i]);
        }
      } else {
        let children = this.props.menuItems[i].children;
        children = children.filter(
          (x) => x.perm && this.props.permissions.includes(x.perm)
        );

        if (children.length) {
          this.props.menuItems[i].children = children;
          menuItems.push(this.props.menuItems[i]);
        }
      }

      // if (this.props.routes[i].perm && this.props.permissions.includes(this.props.routes[i].perm)) {
      //     routes.push(this.props.routes[i])
      // } else if (this.props.routes[i].perm ==='') {
      //     routes.push(this.props.routes[i])
      // }
    }
    for (let i = 0; i < this.props.routes.length; i++) {
      if (
        this.props.routes[i].perm &&
        this.props.permissions.includes(this.props.routes[i].perm)
      ) {
        routes.push(this.props.routes[i]);
      } else if (this.props.routes[i].perm === "") {
        routes.push(this.props.routes[i]);
      }
    }
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };

    //   const handleClose = () => {
    //     setAnchorEl(null);
    //   };
    return (
      <div className={classes.root}>
        {redirectToHome}

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.props.open}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={<span id="message-id">{this.props.msgs[0]}</span>}
        />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              className={`${classes.grow} logo`}
              noWrap
            >
              <div style={{ display: "flex" }}>
                <p className="label">LOGO</p>
              </div>
            </Typography>
            <CustomizedMenus logoutAPI={this.props.logoutAPI} />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <span
              style={{
                marginRight: 30,
                fontSize: "14px",
                fontWeight: "bold",
                color: "#1976d2",
              }}
            >
              Version 1.0.0
            </span>
            <IconButton
              style={{ padding: "3px" }}
              onClick={this.handleDrawerClose}
            >
              {this.state.open ? (
                <ChevronLeftIcon color={"primary"} />
              ) : (
                <ChevronRightIcon color={"primary"} />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.props.menuItems.map((item) => {
              return (
                <div key={item.name}>
                  {!item.sub ? (
                    <ListItem
                      button
                      dense
                      key={item.link}
                      onClick={() => {
                        this.props.SelectedRoute(item.link);
                        this.props.history.push(item.link);
                      }}
                      style={{
                        backgroundColor:
                          item.link === this.props.selectedRoute
                            ? "#e0e0e0"
                            : "#fff",
                      }}
                    >
                      <ListItemIcon style={{ fontSize: "14px" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ) : (
                    <div>
                      <ListItem
                        button
                        dense
                        key={item.name}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={(e) => {
                          this.handleClick(e.currentTarget);
                          this.props.SelectedRoute(item.link);
                        }}
                        style={{
                          backgroundColor:
                            item.link === this.props.selectedRoute
                              ? "#e0e0e0"
                              : "#fff",
                        }}
                      >
                        <ListItemIcon style={{ fontSize: "14px" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                      </ListItem>
                      <Menu
                        id="lock-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                      >
                        {item.children.map((subMenu) => {
                          return (
                            <MenuItem
                              key={subMenu.link}
                              onClick={(e) => {
                                this.handleMenuItemClick(subMenu);
                                this.handleClose();
                                // this.props.SelectedRoute(subMenu.link);
                              }}
                            >
                              {subMenu.name}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </div>
                  )}
                </div>
              );
            })}
          </List>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            {this.props.routes.map((item) => {
              return (
                <Route
                  exact
                  path={item.link}
                  key={item.link}
                  component={item.comp}
                />
              );
            })}
          </Switch>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  auth: state.login.auth,
  open: state.notify.open,
  msgs: state.notify.msgs,
  menuItems: state.admin.menuList,
  routes: state.admin.routes,
  permissions: state.login.actionPermissions,
  selectedRoute: state.common.selectedRoute,
});

const mapDispatchToProps = {
  logoutAPI: LogoutAPI,
  SelectedRoute: SelectedRoute,
};

//export default withStyles(styles, { withTheme: true })(MiniDrawer);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MiniDrawer));
