// components/Members.js

import Image from 'next/image';
import styles from './Members.module.css'; // Import the CSS file for styling

const Members = () => {
  return (
    <section className={styles.Member}>
      <div className={styles.doctors}>
        <div className={styles.member}>
          <div>
            <Image
              src="/ios-people-outline.png"
              alt="Doctors"
              width={115}
              height={74}
            />
          </div>
          <div>
            <p className={styles.largeText}>+1500</p>
            <p className={styles.mediumText}>Report Submitted</p>
          </div>
        </div>
      </div>

      <div className={styles.clinics}>
        <div className={styles.member}>
          <div>
            <Image
              src="/ios-home-outline.png"
              alt="Clinics"
              width={84}
              height={84}
            />
          </div>
          <div>
            <p className={styles.largeText}>+500</p>
            <p className={styles.mediumText}>Verified Users</p>
          </div>
        </div>
      </div>

      <div className={styles.specialist}>
        <div className={styles.member}>
          <div>
            <Image
              src="/Group.png"
              alt="Specialist"
              width={81}
              height={75}
            />
          </div>
          <div>
            <p className={styles.largeText}>+100</p>
            <p className={styles.mediumText}>Devices Monitored</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
