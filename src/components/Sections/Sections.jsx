import React from 'react';
import Info from '../Info/Info';
import Info2 from '../Info-2/Info2';
import { componentsConfig } from '../../config/components';

const Sections = () => {
  return (
    <>
      <div className="">
        <Info {...componentsConfig.incidencia} />
      </div>
      <div className="pt-5">
        <Info2 {...componentsConfig.frutapp} />
      </div>
      <div className="pt-5">
        <Info {...componentsConfig.phishing} />
      </div>
    </>
  );
};

export default Sections;
