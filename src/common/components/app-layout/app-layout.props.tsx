import { WithStyles } from "@material-ui/core/styles";
import { styles } from "./app.layout.styles";

export interface MenuOption {
  text: string;
  linkTo: string;
  icon: JSX.Element;
}

export interface AppLayoutComponentConfig {
  menu: MenuOption[];
  title: string;
}

export interface AppLayoutComponentProps extends WithStyles<typeof styles> {
  config: AppLayoutComponentConfig;
}

export interface AppLayoutContainerProps {
  config: AppLayoutComponentConfig;
}
