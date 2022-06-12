import React from 'react';
import '../styles/Services.css';
import { FaDharmachakra, FaRegLightbulb, FaGlobeAfrica } from 'react-icons/fa';

const Services = () => {
  const data = [
    {
      icon: <FaRegLightbulb />,
      title: 'Power line construction',
      info: 'Chapa general enterprises ltd is experienced in construction of power lines for electricity distribution using both wooden and concrete support structures',
    },
    {
      icon: <FaDharmachakra />,
      title: 'Construction of substations',
      info: 'Our Civil engineering services include Road works, Trench construction, PLM implementation and customization services, CAD conversion and migration,2D Drafting services, 3D modeling and 3D Mechanical drafting services, Reverse engineering services, Piping design and Drafting service',
    },
    {
      icon: <FaGlobeAfrica />,
      title: 'Engineering Equipment Supply',
      info: 'Our Civil engineering services include Road works, Trench construction, PLM implementation and customization services, CAD conversion and migration,2D Drafting services, 3D modeling and 3D Mechanical drafting services, Reverse engineering services, Piping design and Drafting service',
    },
  ];
  const listItems = data.map((element) => {
    return (
      <div className="service">
        <h1>{element.icon}</h1>
        <h6>{element.title}</h6>
        <p>{element.info}</p>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default Services;
