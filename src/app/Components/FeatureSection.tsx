// components/FeatureSection.js

import Image from 'next/image';
import styles from './FeatureSection.module.css'; // Import the CSS module

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <h2 className={styles.title}>Features</h2>
      
      
      <Image
        src="/Our Services (1).png"
        alt="Our Services"
        className={styles.ourServicesImage}
        width={400}
        height={400}
      />
       

      <div className={styles.featureContainer}>
        {/* Feature Cards */}
        <div className={styles.featureCard}>
          <Image
            src="/downolad1.jpg"
            alt="Secure Data Handling"
            width={150}
            height={150}
            className={styles.featureCardImage}
          />
          <h3 className={styles.featureCardfont} >Secure Data Handling</h3>
          <p className={styles.featureCardpara} >
            Your reports are <br /> encrypted and kept <br />
            confidential to <br /> protect patient privacy.
          </p>
          <button className={styles.button}>SEE DETAILS</button>
        </div>
        
        <div className={styles.featureCard}>
          <Image
            src="/download2.jpg"
            alt="Real-Time Alerts"
            width={150}
            height={150}
            className={styles.featureCardImage}
          />
          <h3 className={styles.featureCardfont} >Real-Time Alerts</h3>
          <p className={styles.featureCardpara} >
            Get notified <br /> immediately about <br /> critical updates on <br /> reported events.
          </p>
          <button className={styles.button}>SEE DETAILS</button>
        </div>
        
        <div className={styles.featureCard}>
          <Image
            src="/download3.png"
            alt="User-Friendly Interface"
            width={150}
            height={150}
            className={styles.featureCardImage}
          />
          <h3 className={styles.featureCardfont} >User-Friendly Interface</h3>
          <p className={styles.featureCardpara} >
            Intuitive design for <br /> seamless reporting, <br /> even for <br /> non-technical users.
          </p>
          <button className={styles.button}>SEE DETAILS</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
