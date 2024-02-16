import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "../theme/theme";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Footer from "../components/Footer/Footer";
import AppNavbar from "../components/Navbars/AppNavbar";
import routes from "../routes";

export default function AppLayout(props) {
  const { ...rest } = props;

  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/app/full-screen-maps";
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/app") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const { onOpen } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <MainPanel
        w="100%"
        pt="12px"
        align="center"
        overflow="hidden"
        backgroundColor="#ffffff!important"
      >
        <Portal>
          <AppNavbar
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent p="10px" maxW={{ xl: "1300px" }}>
            <PanelContainer>
              <Switch>
                {getRoutes(routes)}
                <Redirect from="/app" to="/app/public" />
              </Switch>
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Footer />
      </MainPanel>
    </ChakraProvider>
  );
}
