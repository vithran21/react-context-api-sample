import React, { useContext } from 'react';
import { DetailsContext } from '../context/DetailsContext';

const ChildComp2 = () => {
  const details = useContext(DetailsContext);
  
  return <div>Age: {details.age}</div>;
};

export default ChildComp2;
