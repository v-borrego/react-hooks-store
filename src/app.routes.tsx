import * as React from "react";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { SearchPageComponent } from "./pages/search-page/search.component";
import { getThemeProps } from "@material-ui/styles";
import { AppLayout } from "./layout/app-layout.component";
import { SearchStorePageComponent } from "./pages/search-store-page/search-store.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

export const AppRoutes = props => {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route exact={true} path="/" component={HomePageComponent} />
            <Route path="/use-state" component={SearchPageComponent} />
            <Route path="/store" component={SearchStorePageComponent} />
            <Route path="/home" component={HomePageComponent} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
      {props.children}
    </>
  );
};
