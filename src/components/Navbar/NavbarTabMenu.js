import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { tabMenuValue } from "variables/tabMenuValue";
import Grid from "@material-ui/core/Grid";

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
  tabText: {
    fontFamily: "Inter",
    lineHeight: "20px",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "none"
  }
});

export default function NavbarTabMenu() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChangeTab = (event, value) => {
    setSelectedTab(value);
  };
  return (
    <Container>
      <AppBar
        color={"transparent"}
        position={"static"}
        className={classes.appBar}
      >
        <Grid container justify={"center"}>
          <Grid item>
            <Tabs
              indicatorColor="secondary"
              textColor="secondary"
              value={selectedTab}
              onChange={handleChangeTab}
            >
              {tabMenuValue.map((value, index) => (
                <Tab
                  label={value.text}
                  icon={value.icon}
                  key={index}
                  className={classes.tabText}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
}
