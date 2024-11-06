import React, { useContext } from 'react';
import { DetailsContext } from '../context/DetailsContext';

const ChildComp3 = () => {
  const details = useContext(DetailsContext);
  
  return <div>City: {details.city}</div>;
};

export default ChildComp3;
