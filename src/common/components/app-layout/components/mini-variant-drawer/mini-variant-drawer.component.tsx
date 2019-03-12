import * as React from "react";

import classNames from "classnames";
import { withStyles, WithStyles, WithTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { styles } from "./mini-variant-drawer.style";

import { MenuOption } from "../../app-layout.props";
import { Link } from "react-router-dom";

interface MiniDrawerProps extends WithStyles<typeof styles> {
  menu: MenuOption[];
  open: boolean;

  onToggleMenu: () => void;
}

class MiniVariantDrawerInner extends React.Component<MiniDrawerProps> {
  handleDrawerClose = () => {
    this.props.open ? this.props.onToggleMenu() : null;
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.props.open,
              [classes.drawerClose]: !this.props.open,
            }),
          }}
          open={this.props.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.props.onToggleMenu}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.props.menu.map(option => (
              <Link to={option.linkTo} key={option.text} onClick={this.handleDrawerClose}>
                <ListItem button>
                  <ListItemIcon className={classes.menuIcon}>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>{this.props.children}</main>
      </>
    );
  }
}

export const MiniVariantDrawer = withStyles(styles)(MiniVariantDrawerInner);
