import * as React from "react";
import { AppLayout } from "./layout/app-layout.component";
import { SearchPageComponent } from "./pages/search-page/search.component";
import { AppRoutes } from "./app.routes";
import { AppStore } from "./app.store";

export const App = () => (
  <AppStore>
    <AppRoutes />
  </AppStore>
);
