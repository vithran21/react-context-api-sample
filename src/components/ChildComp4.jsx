import React from 'react';
import { DetailsContext } from '../context/DetailsContext';

const ChildComp4 = () => {
  return (
    <DetailsContext.Consumer>
      {(details) => (
        <div>From Consumer - Name: {details.name}, Age: {details.age}, City: {details.city}</div>
      )}
    </DetailsContext.Consumer>
  );
};

export default ChildComp4;
