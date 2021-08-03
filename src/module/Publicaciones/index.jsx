import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../providers/usuariosProvider/actions';
import * as publicacionesActions from '../../providers/publicacionesProvider/actions';
import tableConfig from './config.table';
import Tabla from '../../components/Table';

function Publicaciones(props) {
  const {
    publicacionesReducer,
    publicacionesPorUsuario,
    match: { params: { id } },
  } = props;
  const {
    usuario,
    publicaciones,
    error: errorPublicaciones,
    cargando: cargandoPublicaciones,
  } = publicacionesReducer;

  const handleUserData = async () => {
    await publicacionesPorUsuario(id);
  };

  useEffect(() => handleUserData(), []);

  return (
    <div>
      <h1>
        {
        `Publicaciones
        ${usuario.name && !cargandoPublicaciones ? `de ${usuario.name}` : ''}`
      }
      </h1>
      <Tabla
        config={tableConfig}
        data={publicaciones}
        error={errorPublicaciones}
        cargando={cargandoPublicaciones}
      />
    </div>
  );
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => ({
  usuariosReducer,
  publicacionesReducer,
});

export default connect(
  mapStateToProps,
  {
    ...usuariosActions,
    ...publicacionesActions,
  },
)(Publicaciones);
