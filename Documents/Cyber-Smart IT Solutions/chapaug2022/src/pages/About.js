import React from 'react';
import '../styles/About.css';
import about from '../images/11.jpg';

const About = () => {
  return (
    <div className="app-about">
      <div className="app-info">
        <h1 className="app-h1">Chapa at a Glance!</h1>
        <h3>
          Chapa is a registered company that deals in Power Lines, Building
          Construction, Substation Construction & Assembly, Telecommunication
          works & Engineering Equipment Supply, Service and Repair
        </h3>
        <p>
          On 2nd day of September the year 2010, M/S Chapa General Enterprises
          Ltd was registered by the Uganda Registration Services Bureau as a
          limited company{' '}
        </p>
        <p>
          with a focus to provide services in the Engineering and General
          Merchandise all over the African Region.
        </p>
      </div>
      <div className="ab-image">
        <img src={about} alt="about-us" />
      </div>
    </div>
  );
};

export default About;
