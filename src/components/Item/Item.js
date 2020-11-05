import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    width: 300
  },
  media: {
    height: 200
  }
});
export default function Item(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rp {props.price} / {props.weightTypes}
          </Typography>
          <Grid container justify="center">
            <Grid item>
              <Button>TODO</Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  weightTypes: PropTypes.string
};
