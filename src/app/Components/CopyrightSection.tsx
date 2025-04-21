// components/CopyrightSection.js

import styles from './CopyrightSection.module.css'; // Import the CSS module

const CopyrightSection = () => {
  return (
    <div className={styles.copyrightSection}>
      <p className={styles.copyrightText}>
        Copyright © 2024 MDAERP-NIMHANS | All Rights Reserved | 
        <span className={styles.privacyPolicy}>
          <a href="/privacy-policy"  className={styles.link}>Privacy Policy</a>
        </span>
      </p>
    </div>
  );
};

export default CopyrightSection;
