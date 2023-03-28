import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 96,
    height: 96,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.foreground.default}`,
  },
  arrow: {
    fill: theme.palette.foreground.default,
    width: 100,
    height: 120,
    transition: "all 0.5s ease",
    "&:hover": {
      fill: theme.palette.primary.main,
      transform: "scale(1.2)",
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.svgHover}>
      <PlayArrowIcon className={classes.arrow} />
    </div>
  );
};



