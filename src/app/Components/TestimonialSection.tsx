// components/TestimonialSection.js

import Image from 'next/image';
import styles from './TestimonialSection.module.css'; // Import the CSS module

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2  className={styles.title}>"What Our Users Say"</h2>
      
      <div className={styles.testimonialContainer}>
        
        {/* Testimonial 1 */}
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            It's simple and efficient. I can submit incident reports without interrupting my workflow.
          </p>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.user}>
            <Image
              src="/avinash.png"
              alt="Avinash T"
              width={60}
              height={60}
              className={styles.userPhoto}
            />
            <div className={styles.userDiv}>
              <strong className={styles.strong}>Avinash T</strong>
              <p className={styles.userPara}>Senior Medical Officer</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial 2 */}
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            Having an anonymous option is a huge relief. It lets us be honest without fear of backlash.
          </p>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.user}>
            <Image
              src="/Sindhu.png"
              alt="Sindu M G"
              width={60}
              height={60}
              className={styles.userPhoto}
            />
            <div className={styles.userDiv}>
              <strong className={styles.strong}>Sindu M G</strong>
              <p className={styles.userPara}>External Mentor</p>
            </div>
          </div>
        </div>
        
        {/* Testimonial 3 */}
        <div className={styles.testimonial}>
          <p className={styles.testimonialText}>
            This platform made it so easy to report an issue. I feel like my concerns are taken seriously!
          </p>
          <div className={styles.stars}>★★★★★</div>
          <div className={styles.user}>
            <Image
              src="/krishnaSir.jpg"
              alt="Krishna Gudi"
              width={60}
              height={60}
              className={styles.userPhoto}
            />
            <div className={styles.userDiv}>
              <strong className={styles.strong}>Krishna Gudi</strong>
              <p className={styles.userPara}>Internal Mentor</p>
            </div>
          </div>
        </div>

        <div className={styles.walkImageContainer}>
          <Image
            src="/walkImage.png"
            alt="Walking"
            id="walkImage"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
