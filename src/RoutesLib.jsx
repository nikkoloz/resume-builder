import { Route, Routes as RoutesList } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/ROUTES_CONFIG";

function RoutesLib() {
  return (
    <RoutesList>
      {ROUTES_CONFIG.map((route) => {
        const Page = route.page;
        return (
          <Route key={route.path} path={route.path} element={<Page />}></Route>
        );
      })}
      <Route path="*" element={<h1>Not Found</h1>} />
    </RoutesList>
  );
}

export default RoutesLib;
