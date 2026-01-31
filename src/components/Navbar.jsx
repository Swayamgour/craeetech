import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "../style/Navbar.module.css";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const menuItems = ["Home", "About", "Services", "Portfolio", "Career", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/assets/logo1.png" width="180" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, color: "#00ff99" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        className={styles.callBtn}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPhoneAlt /> +91 8299619919
      </motion.button>

      {/* Mobile Icon */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {menuItems.map((item) => (
              <div key={item} className={styles.mobileItem}>
                {item}
              </div>
            ))}

            <button className={styles.mobileBtn}>
              <FaPhoneAlt /> +91 8299619919
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
