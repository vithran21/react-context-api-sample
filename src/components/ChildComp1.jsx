import React, { useContext } from 'react';
import { DetailsContext } from "../context/DetailsContext"

const ChildComp1 = () => {
  const details = useContext(DetailsContext);
  
  return <div>Name: {details.name}</div>;
};

export default ChildComp1;
