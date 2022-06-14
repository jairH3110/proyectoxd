import React from 'react';

const Raza = (props) => {
  const { raza } = props;
  return (
    <div>
      <div>
        {raza.nombre} ({raza.description})
      </div>
    </div>
  );
};

export default Raza;