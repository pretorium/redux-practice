import React from 'react';
import './styles.css';

function Fatal(props) {
  const {
    mensaje,
  } = props;

  return (
    <div>
      <h2>
        {mensaje}
      </h2>
    </div>
  );
}

export default Fatal;
