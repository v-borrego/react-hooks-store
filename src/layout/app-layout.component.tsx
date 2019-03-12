import * as React from "react";
import { useStyles } from "./app-layout.styles";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import CodeIcon from "@material-ui/icons/Code";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase/InputBase";
import TextField from "@material-ui/core/TextField/TextField";
import { AppLayoutModule } from "./app-layout/app-layout.component";

export const AppLayout: React.FunctionComponent = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppLayoutModule>
        <div className={classes.gridContainer}>
          <div className={classes.mainArea}>{children}</div>
        </div>
      </AppLayoutModule>
    </>
  );
};
