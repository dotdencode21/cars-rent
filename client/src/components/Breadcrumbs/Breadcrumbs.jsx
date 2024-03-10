import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";
import { ROUTES_NAMES, ROUTES_NAMES_TRANSLATION } from "@/constants/routes";
import { useMemo } from "react";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { useTranslation } from "react-i18next";

const Breadcrumbs = ({ imgSrc }) => {
  const { pathname } = useLocation();
  const breadcrumbs = useBreadcrumbs();
  const { t } = useTranslation();

  const currentPathTitle = useMemo(() => {
    return ROUTES_NAMES.find(routeName => routeName.to === pathname).title;
  }, [pathname]);

  return (
    <div
      style={{ backgroundImage: `url(${imgSrc})` }}
      className={styles["breadcrumbs"]}
    >
      <span className={styles["breadcrumbs-current-path"]}>
        {t(ROUTES_NAMES_TRANSLATION[currentPathTitle])}
      </span>
      <div className={styles["breadcrumbs-list"]}>
        {
          breadcrumbs.map(breadcrumb => {
            return (
              <Link
                key={breadcrumb.id}
                to={breadcrumb.to}
                className={styles["breadcrumbs-list-link"]}
              >
                {t(ROUTES_NAMES_TRANSLATION[breadcrumb.title])}
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Breadcrumbs;