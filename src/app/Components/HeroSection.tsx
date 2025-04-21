import React from "react";
 

const HeroSection = () => {
  return (
    <section className="heroSection">
      {/* Hero Images */}
      
        <img
          src="/HeroImage.png"
          alt="Main Picture"
          className="heroimage"
        />
        {/* <img src="/Oval.png" alt="Oval Decoration" className="ovaldecoration" /> */}
      

      {/* Hero Text */}
      <div className="heroText">
        <p className="heroTitle">
          Your Gateway To Medical <br /> Device Safety Reporting
        </p>
        <p className="heroSubtitle">
          Simplifying the process of reporting <br /> adverse medical device events for <br /> everyone
        </p>
      </div>

      {/* Learn More Button */}
       
        <button className="register">Learn More</button>
       

      {/* Blocks Section */}
      <div className="blockSection">
        {/* Block 1 */}
        <div className="block">
          <h1 className="blocktitle">Business Solution</h1>
          <h3 className="blockdescription">
            Understand the importance of reporting <br /> adverse events to improve device safety <br /> and regulatory compliance.
          </h3>
        </div>
        {/* Block 2 */}
        <div className="block">
          <h1 className="blocktitle second">Who Can Report?</h1>
          <h3 className="blockdescription">
            Patients, Caretakers, Healthcare <br /> Professionals, and <br/>many more ....
          </h3>
        </div>
        {/* Block 3 */}
        <div className="block">
          <h1 className="blocktitle">Event Types</h1>
          <h3 className="blockdescription">
            Report any adverse events, including device <br /> malfunctions, injuries, or safety concerns <br /> and many more ....
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
