import React from 'react';
import Spinner from '../Spinner';
import Fatal from '../Fatal';
import './styles.css';

function Table(props) {
  const {
    data,
    error,
    config,
    cargando,
  } = props;

  return (
    <table className="tabla">
      <thead>
        {data.length > 0 && (
          <tr>
            {Object.keys(config).map((key, idx) => (
              <th key={`th-${idx}`}>
                {config[key].colName}
              </th>
            ))}
          </tr>
        )}
      </thead>
      <tbody>
        {!cargando && data.length > 0 && data.map((item) => (
          <tr>
            {Object.keys(config).map((key, idx) => (
              <td key={`td-${idx}`}>
                {item[key]}
              </td>
            ))}
          </tr>
        ))}
        {cargando && (
          <tr>
            <td colSpan="3" className="tdCenter">
              <Spinner />
            </td>
          </tr>
        )}
        {error && !cargando && data.length === 0 && (
          <tr>
            <td className="tdCenter">
              <Fatal mensaje={error} />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
