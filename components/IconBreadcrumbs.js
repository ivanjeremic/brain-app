import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Router from "next/router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import { useAppState } from "../context/StateContext";
import AniClick from "../animations/AniClick";

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
    color: "white",
    fontSize: "25px",
    lineHeight: "25px",
    cursor: "pointer"
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 25,
    height: 25
  }
}));

function handleClick() {
  Router.push("/");
}

export default function IconBreadcrumbs({ topTitle }) {
  const classes = useStyles();
  const { startseite } = useAppState();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <AniClick>
        <Link color="inherit" onClick={handleClick} className={classes.link}>
          <HomeIcon className={classes.icon} />
          {startseite}
        </Link>
      </AniClick>
      <AniClick>
        <Link color="inherit" onClick={handleClick} className={classes.link}>
          <WhatshotIcon className={classes.icon} />
          News
        </Link>
      </AniClick>
    </Breadcrumbs>
  );
}
