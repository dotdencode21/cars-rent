import { ROUTES_NAMES } from "@/constants/routes";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([
    { id: uuidv4(), title: "Home", to: "/" }
  ]);

  useEffect(() => {
    setBreadcrumbs(prev => [...prev, ROUTES_NAMES.find(routeName => routeName.to === pathname)])

    return () => {
      setBreadcrumbs(prev => prev.slice(0, -1));
    }
  }, [pathname]);

  return breadcrumbs.filter(Boolean);
};
