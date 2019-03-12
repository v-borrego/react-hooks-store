import * as React from "react";
import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";

import classNames from "classnames";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { styles } from "./header-bar.styles";

interface HeaderBarProps extends WithStyles<typeof styles> {
  title: string;
  open: boolean;

  onToggleMenu: () => void;
}

const HeaderBarInner: React.StatelessComponent<HeaderBarProps> = props => (
  <AppBar
    position="fixed"
    className={classNames(props.classes.appBar, {
      [props.classes.appBarShift]: props.open,
    })}
  >
    <Toolbar disableGutters={!props.open}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={props.onToggleMenu}
        className={classNames(props.classes.menuButton, {
          [props.classes.hide]: props.open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        {props.title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export const HeaderBar = withStyles(styles)(HeaderBarInner);
