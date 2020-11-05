import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { LOGO_NAME } from "const";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    width: "100%",
    paddingTop: "10px",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  caption: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    color: "#5A5B6A"
  },
  form: {
    backgroundColor: "#F9F9F9",
    borderRadius: "99px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  },
  textMenuAppBar: {
    fontFamily: "Inter",
    lineHeight: "150%",
    fontSize: "20px",
    color: "#EC202C",
    textTransform: "none"
  }
});

export default function NavBar() {
  const classes = useStyles();
  useEffect(() => {
    handleFetchAccountData();
  }, []);
  const [searchValue, setSearchValue] = useState("");
  const [accountValues, setAccountValues] = useState({
    loggedIn: false,
    cart: 0
  });

  const handleFetchAccountData = () => {
    //TODO get API login status & cart item
    //dummy
    if (Math.random() > 0.5)
      setAccountValues({
        loggedIn: true,
        cart: Math.floor(Math.random() * 20)
      });
    //endDummy
  };

  const RenderLoggedOutAccountMenu = () => {
    return (
      <>
        <Grid item md={1}>
          <Button className={classes.textMenuAppBar}>Register</Button>
        </Grid>
        <Grid item md={1}>
          <Button
            className={classes.textMenuAppBar}
            style={{ fontWeight: "bold" }}
          >
            Login
          </Button>
        </Grid>
      </>
    );
  };

  const RenderLoggedInAccountMenu = () => {
    return (
      <>
        <Grid item md={1}>
          <Button className={classes.textMenuAppBar}>Account</Button>
        </Grid>
        <Grid item md={1}>
          <IconButton>
            <Badge color={"secondary"} badgeContent={accountValues.cart}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Grid>
      </>
    );
  };

  const handleChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
    event.preventDefault();
  };

  const handleSubmitSearch = () => {
    //TODO
    // dummy
    console.log("kirim ke API search", searchValue);
    // endDummy
  };

  return (
    <AppBar
      color={"transparent"}
      position={"static"}
      className={classes.appBar}
    >
      <Container maxWidth={"lg"}>
        <Grid container justify={"space-evenly"} alignItems={"center"}>
          <Grid item md={2}>
            <Link to={"/"}>
              <img src={LOGO_NAME} alt="Meateria" />
            </Link>
          </Grid>
          <Grid item md={2}>
            <p className={classes.caption}>Sell on Meateria</p>
          </Grid>
          <Grid item md={4}>
            <TextField
              variant={"outlined"}
              id="component-filled"
              placeholder="Search for Meat"
              className={classes.form}
              value={searchValue}
              onKeyPress={(event) => {
                if (event.key === "Enter") handleSubmitSearch();
              }}
              onChange={handleChangeSearchValue}
            />
          </Grid>
          {accountValues.loggedIn ? (
            <RenderLoggedInAccountMenu />
          ) : (
            <RenderLoggedOutAccountMenu />
          )}
        </Grid>
      </Container>
    </AppBar>
  );
}
