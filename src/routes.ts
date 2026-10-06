import {useEffect} from "react";
import {Outlet, useLocation} from "react-router";
import { createBrowserRouter } from "react-router";
import HomePage from "./HomePage";
import KeelCaseStudy from "./KeelCaseStudy";
import HeartCityCaseStudy from "./HeartCityCaseStudy";
import SafelinkCaseStudy from "./SafelinkCaseStudy";
import DashboardCaseStudy from "./DashboardCaseStudy";
import MightyWellCaseStudy from "./MightyWellCaseStudy";
import MarshmallowFluffCaseStudy from "./MarshmallowFluffCaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect (() => {
      if (!window.location.hash) {
    window.scrollTo(0,0);
  }
}, [pathname]};

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    element: <ScrollToTop/>
    children: [
      path: "/",
      Component: HomePage,
    },
    {
      path: "/keel",
      Component: KeelCaseStudy,
    },
    {
      path: "/heart-city",
      Component: HeartCityCaseStudy,
    },
    {
      path: "/safelink",
      Component: SafelinkCaseStudy,
    },
    {
      path: "/dashboard",
      Component: DashboardCaseStudy,
    },
    {
      path: "/mighty-well",
      Component: MightyWellCaseStudy,
    },
    {
      path: "/marshmallow-fluff",
      Component: MarshmallowFluffCaseStudy,
    },
  ],
                                          },                                        
                                  
], {
  basename: "/portfolio",
});
