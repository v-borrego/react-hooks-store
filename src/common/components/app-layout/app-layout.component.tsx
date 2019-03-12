import * as React from "react";
import { MiniVariantDrawer } from "./components/mini-variant-drawer/mini-variant-drawer.component";
import { AppLayoutComponentProps } from "./app-layout.props";
import { HeaderBar } from "./components/header-bar/header-bar.component";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./app.layout.styles";
import CssBaseline from "@material-ui/core/CssBaseline";

interface AppLayoutComponentState {
  open: boolean;
}

class AppLayoutComponentInner extends React.Component<AppLayoutComponentProps, AppLayoutComponentState> {
  constructor(props: AppLayoutComponentProps) {
    super(props);

    this.state = {
      open: true,
    };
  }

  onToggleMenu = () => {
    // this.setState({
    //   open: !this.state.open,
    // });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <CssBaseline />
          <HeaderBar title={this.props.config.title} onToggleMenu={this.onToggleMenu} open={this.state.open} />
          <MiniVariantDrawer menu={this.props.config.menu} onToggleMenu={this.onToggleMenu} open={this.state.open}>
            {this.props.children}
          </MiniVariantDrawer>
        </div>
      </>
    );
  }
}

export const AppLayoutComponent = withStyles(styles)(AppLayoutComponentInner);
