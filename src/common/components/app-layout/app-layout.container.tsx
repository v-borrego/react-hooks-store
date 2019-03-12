import * as React from "react";
import { AppLayoutComponent } from "./app-layout.component";
import { AppLayoutContainerProps } from "./app-layout.props";

export const AppLayout: React.StatelessComponent<AppLayoutContainerProps> = props => (
  <AppLayoutComponent {...props}>{props.children}</AppLayoutComponent>
);
