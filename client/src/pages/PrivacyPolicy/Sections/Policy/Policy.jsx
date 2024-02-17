import { privacyPolicyData } from "@/mock/privacyPolicy.data";
import styles from "./policy.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PRIVACY_POLICY_CONTENT, PRIVACY_POLICY_TITLE } from "@/constants/privacyPolicy";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import bgPrivacyPolicyImg from "@/assets/imgs/backgrounds/bg-privacy-policy.jpg";

const PolicySection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumbs 
        imgSrc={bgPrivacyPolicyImg}
      />
      <div className={styles["policy-section"]}>
        {
          privacyPolicyData.map(policy => {
            return (
              <div
                key={policy.id} 
                className={styles["policy-section-block"]}
              >
                <span className={styles["policy-section-block-title"]}>
                  {t(PRIVACY_POLICY_TITLE[policy.title])}
                </span>
                <span className={styles["policy-section-block-content"]}>
                  {t(PRIVACY_POLICY_CONTENT[policy.content])}
                </span>
              </div>
            );
          })
        }
        <Link
          to="#"
          className={styles["policy-section-link"]}
        >
          info@demolink.org
        </Link>
      </div>
    </>
  );
};

export default PolicySection;