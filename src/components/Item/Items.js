import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
    marginBottom: "10px"
  },
  item: {
    marginLeft: "4px",
    marginRight: "4px",
    marginTop: "10px",
    marginBottom: "10px"
  }
});

export default function Items() {
  const classes = useStyles();
  useEffect(() => {
    handleFetchItemList();
  }, []);
  const [itemList, setItemList] = useState([]);

  const handleFetchItemList = () => {
    let dummy = [];
    for (let i = 0; i < Math.random() * 30; i++)
      dummy.push({
        title: "Daging #" + Math.floor(Math.random() * 10000),
        price: "" + Math.floor(Math.random() * 100000),
        image:
          "https://source.unsplash.com/featured/?meat," +
          Math.floor(Math.random() * 10000),
        weightTypes: Math.random() > 0.5 ? "Kg" : "Oz"
      });
    setItemList(dummy);
  };

  const RenderGrid = () => {
    const column = 4;
    const row = itemList.length / column;
    let listArray = [];
    for (let i = 0; i < row; i++)
      listArray.push(itemList.slice(i * column, (i + 1) * column));
    return (
      <>
        {listArray.map((items, indexParent) => (
          <Grid container key={indexParent} className={classes.container}>
            {items.map((item, indexChild) => (
              <Grid
                item
                key={indexParent + "." + indexChild}
                className={classes.item}
              >
                <Item {...item} />
              </Grid>
            ))}
          </Grid>
        ))}
      </>
    );
  };
  return (
    <Container maxWidth={"lg"}>
      <RenderGrid />
    </Container>
  );
}
