import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import "../styles/signin.css";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
      3
    )}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(2),
    height: "40px",
  },
});

function ForgotPassword(props) {
  let history = useHistory();
  const { classes } = props;

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function forgotPassword(username, email, mobile) {
    console.log(username, email, mobile);
  }

  return (
    <div className="forgot-password">
      <main className={classes.main}>
        <CssBaseline />
        <div>
          <div
            className="text-center"
            style={{ display: "flex", justifyContent: "center", fontSize: 30, fontWeight: 600, color: "#696969" }}
          >
            LOGO
          </div>
          <Paper className={classes.paper} style={{paddingBottom: 15}}>
            <p style={{ marginTop: 5, marginBottom: 0 }}>
              Please provide the below details
            </p>
            <form
              className={classes.form}
              // onSubmit={(e) => forgotPassword(username, email, mobile)}
            >
              <FormControl margin="normal" required fullWidth>
                <input
                  style={{ borderRadius: 0 }}
                  placeholder="User ID*"
                  className="form-control"
                  variant="outlined"
                  size="small"
                  id="username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <input
                  style={{ borderRadius: 0 }}
                  placeholder="Email*"
                  className="form-control"
                  variant="outlined"
                  size="small"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <input
                  style={{ borderRadius: 0 }}
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile*"
                  variant="outlined"
                  size="small"
                  type="mobile"
                  id="mobile"
                  autoComplete="current-password"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={`custom-button btn-primarym ${classes.submit}`}
                onClick={(e) => forgotPassword(username, email, mobile)}
              >
                Submit
              </Button>
            </form>
            <span
              style={{
                cursor: "pointer",
                color: "#436af5",
                fontWeight: 600,
                marginTop: 20,
                marginRight: "auto"
              }}
              onClick={(e) => history.push("/")}
            >
              <ArrowBackIcon /> Back to login
            </span>
          </Paper>
        </div>
      </main>
    </div>
  );
}

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassword);
