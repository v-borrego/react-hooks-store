import * as React from "react";
import { AppLayoutComponentConfig, AppLayout } from "../../common/components/app-layout";
import { desktop } from "../../assets/images";
import { SvgLoader } from "../../common/components/svg-loader";

const config: AppLayoutComponentConfig = {
  menu: [
    {
      text: "Option 1",
      linkTo: "/home",
      icon: <SvgLoader image={desktop} />,
    },
  ],
  title: "Github Searcher",
};

export const AppLayoutModule: React.StatelessComponent = props => (
  <AppLayout config={config}>{props.children}</AppLayout>
);
