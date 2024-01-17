import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
// import Error404 from "./utils/Error404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/app`} component={AppLayout} />
        <Redirect from={`/app`} to="/app/public" />
        <Redirect from={`/`} to="/app" />
        {/* <Route path={"*"} component={Error404} />; */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
