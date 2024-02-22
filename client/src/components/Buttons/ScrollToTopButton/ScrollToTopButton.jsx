import { motion } from "framer-motion";
import styles from "./scroll-to-top-button.module.css";

import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = ({ show }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const variants = {
    initial: {
      x: 0,
    },
    visible: {
      x: -40,
      transition: {
        ease: "easeInOut",
        duration: 0.25
      }
    },
  };

  return (
    <>
      {
        show && (
          <motion.button
            initial="initial"
            animate="visible"
            variants={variants}
            className={styles["scroll-to-top-btn"]}
            onClick={handleScrollToTop}
          >
            <FaArrowUp 
              className={styles["scroll-to-top-btn-icon"]}
            />
          </motion.button>
        )
      }
    </>
  )
};

export default ScrollToTopButton;