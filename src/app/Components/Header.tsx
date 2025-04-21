import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.NavBar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src="/NimhansLogo.png" alt="Nimhans Logo" />
      </div>

      {/* Navigation Links */}
      <ul className={styles.navigators}>
        <li>Home</li> 
        <li>Clinic Facilities</li>
        <li>Testimonials</li>
        <li>Trusted By</li>
      </ul>

      {/* Credentials Section */}
      <div className={styles.credentials}>
        {/* Register Button */}
        <div className={styles.Register}>
        <button id="Register" className={styles.Registers}>
          SIGNIN / SIGNUP
        </button>
        </div>

        {/* Language Selector */}
        <div className={styles.Lang}>
          <img
            src="/Lang.png"
            alt="Language Icon"
            className={styles.languageIcon}
          />
          <select name="Languages" id="Languages" className={styles.select}>
            <option value="English">English-En</option>
            <option value="Kannada">Kannada-Kn</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
