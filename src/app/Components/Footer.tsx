// components/Footer.js

import Image from 'next/image';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        
        <div className={styles.coloredCircle}></div>
        
        <div className={styles.footerLogo}>
          <Image
            src="/NimhansLogo.png"
            alt="Logo of Nimhans"
            width={251}
            height={54}
          />
          <pre className={styles.footerText}>
            Institute of National Importance<br/>
            operating autonomously under the<br/>
            Ministry of Health and Family Welfare<br/>
          </pre>
        </div>

        <div className={styles.footerInfo}>
          <h2 className={styles.footerHeading}>COMPANY</h2>
          <h2 className={styles.footerHeading}>SERVICES</h2>
          <h2 className={styles.footerHeading}>RESOURCES</h2>
          <p className={styles.footerLink}>About Us</p>
          <p className={styles.footerLink}>Reporting Guidelines</p>
          <p className={styles.footerLink}>Knowledge Base</p>
          <p className={styles.footerLink}>Careers</p>
          <p className={styles.footerLink}>FAQs</p>
          <p className={styles.footerLink}>Latest updates</p>
        </div>
        
      </div>
      <Image
        src="/Plant.png"
        alt="Decorative Plant"
        className={styles.plantSvg}
        width={400}
        height={300}
      />
    </footer>
  );
};

export default Footer;
 