import * as React from "react";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import { SearchPageComponent } from "./pages/search-page/search.component";
import { getThemeProps } from "@material-ui/styles";
import { AppLayout } from "./layout/app-layout.component";
import { SearchStorePageComponent } from "./pages/search-store-page/search-store.component";

export const AppRoutes = props => {
  return (
    <>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            <Route exact={true} path="/" component={SearchPageComponent} />
            <Route path="/home" component={SearchStorePageComponent} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
      {props.children}
    </>
  );
};
