import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const AuthLoader = () => {
  return (
    <div>
      <ThreeDots
        height="30"
        width="50"
        radius="9"
        color="var(--primary-color)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default AuthLoader;
