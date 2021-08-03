import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Tabla from '../../components/Table';
import TablaConfig from './config.table';
import * as usuariosActions from '../../providers/usuariosProvider/actions';

const Usuarios = (props) => {
  const {
    error,
    usuarios,
    cargando,
    traerTodos,
  } = props;
  const [list, setList] = useState([]);

  const handleList = () => {
    const nextList = usuarios.map((item) => ({
      ...item,
      view: (
        <Link to={`/publicaciones/${item.id}`}>
          <div className="eye-solid icon" />
        </Link>
      ),
    }));
    setList(nextList);
  };

  useEffect(() => {
    const subscribe = () => { traerTodos(); };
    return subscribe();
  }, []);

  useEffect(() => handleList(), [usuarios]);

  return (
    <>
      <h1>Lista de usuarios</h1>
      <Tabla
        config={TablaConfig}
        error={error}
        data={list}
        cargando={cargando}
      />
    </>
  );
};

const mapStateToProps = (reducers) => reducers.usuariosReducer;

export default connect(mapStateToProps, usuariosActions)(Usuarios);
