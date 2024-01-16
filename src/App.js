import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Home, HowItWorks } from "./pages/Public";
import AuthLayout from "./layouts/Auth";
import AppLayout from "./layouts/AppLayout";
// import Error404 from "./utils/Error404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/home`} component={Home} />
        <Route path={`/howItWorks`} component={HowItWorks} />
        <Route path={`/auth/signin`} component={AuthLayout} />
        <Route path={`/auth/signup`} component={AuthLayout} />
        <Route path={`/app`} component={AppLayout} />
        <Route path={`/app/dashboard`} component={AppLayout} />
        <Redirect from={`/app`} to="/app/dashboard" />
        <Redirect from={`/`} to="/home" />
        <Route path={`/auth`} component={AuthLayout} />
        {/* <Route path={"*"} component={Error404} />; */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
