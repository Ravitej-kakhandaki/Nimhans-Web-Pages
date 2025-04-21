// components/AppointmentSection.js

import styles from './AppointmentSection.module.css'; // Import the CSS module

const AppointmentSection = () => {
  return (
    <section className={styles.appointmentSection}>
      <div className={styles.appointments}>
        <div>
          <p className={styles.title}>Ready to get started?</p>
        </div>
        <button className={styles.appointmentButton}>REPORT NOW</button>
      </div>
    </section>
  );
};

export default AppointmentSection;
