import React from 'react';
import TypeWriter from './TypeWriter';

const HeaderMobile: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-body-margin pt-body-margin">
      <div className="my-2 text-center">
        <TypeWriter />
      </div>
    </div>
  );
};

export default HeaderMobile;
