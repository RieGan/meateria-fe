import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as all_grid_icon } from "assets/img/all_grid.svg";
import { ReactComponent as beef_icon } from "assets/img/beef.svg";
import { ReactComponent as lamb_icon } from "assets/img/lamb.svg";
import { ReactComponent as chicken_icon } from "assets/img/chicken.svg";

export const tabMenuValue = [
  {
    text: "All",
    icon: (
      <>
        <SvgIcon color={"inherit"} component={all_grid_icon} />
      </>
    )
  },
  {
    text: "Beef",
    icon: (
      <>
        <SvgIcon color={"inherit"} component={beef_icon} />
      </>
    )
  },
  {
    text: "Lamb",
    icon: (
      <>
        <SvgIcon color={"inherit"} component={lamb_icon} />
      </>
    )
  },
  {
    text: "Chicken",
    icon: (
      <>
        <SvgIcon color={"inherit"} component={chicken_icon} />
      </>
    )
  }
];
