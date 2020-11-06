import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LOGO_WHITE from "assets/img/logo_name_white.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    paddingTop: "5vh",
    paddingBottom: "5vh"
  },
  footer: {
    backgroundColor: "#353535",
    color: "#e0e0e0"
  },
  footerTitle: {},
  footerText: {
    color: "#FFFFFF",
    marginBottom: "0",
    marginTop: "0",
    fontFamily: "Inter",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    letterSpacing: "0.004em",
    textAlign: "left",
    textDecoration: "none"
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth={"lg"} className={classes.container}>
        <img src={LOGO_WHITE} alt={"Meateria"} />
        <br />
        <br />
        <Grid container justify={"space-between"}>
          <Grid item>
            <p className={classes.footerText}>
              Jl Daging no 75 UH XIII 21039 Yogyakarta
            </p>
            <p className={classes.footerText}>0273 619118</p>
            <p className={classes.footerText}>cs@meateria.com</p>
          </Grid>
          <Grid item>
            <Link className={classes.footerText} to={"/#instagram"}>
              instagram
            </Link>
            <br />
            <Link className={classes.footerText} to={"/#twitter"}>
              twitter
            </Link>
            <br />
            <Link className={classes.footerText} to={"/#fesbuk"}>
              facebook
            </Link>
          </Grid>
          <Grid item>
            <Link className={classes.footerText} to={"/#instagram"}>
              About Us
            </Link>
            <br />
            <Link className={classes.footerText} to={"/#twitter"}>
              FAQ
            </Link>
            <br />
            <Link className={classes.footerText} to={"/#fesbuk"}>
              Privacy Policy
            </Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
