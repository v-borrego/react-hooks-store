import * as React from "react";
import { AppLayoutComponentConfig, AppLayout } from "../../common/components/app-layout";
import { desktop } from "../../assets/images";
import { SvgLoader } from "../../common/components/svg-loader";

const config: AppLayoutComponentConfig = {
  menu: [
    {
      text: "Use Hooks Store user",
      linkTo: "/home",
      icon: <SvgLoader image={desktop} />,
    },
    {
      text: "Use local hook state",
      linkTo: "/use-state",
      icon: <SvgLoader image={desktop} />,
    },
    {
      text: "Hooks Store repos",
      linkTo: "/store",
      icon: <SvgLoader image={desktop} />,
    },
  ],
  title: "Github Searcher",
};

export const AppLayoutModule: React.StatelessComponent = props => (
  <AppLayout config={config}>{props.children}</AppLayout>
);
