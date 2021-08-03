import Usuarios from './module/Usuarios';
import Tareas from './module/Tareas';
import Publicaciones from './module/Publicaciones';

const routesConfig = [
  {
    showInMenu: true,
    name: 'Usuarios',
    path: '/',
    component: Usuarios,
    exact: true,
  },
  {
    showInMenu: true,
    name: 'Tareas',
    path: '/tareas',
    component: Tareas,
    exact: true,
  },
  {
    showInMenu: false,
    name: 'Publicaciones',
    path: '/publicaciones/:id',
    component: Publicaciones,
    exact: true,
  },
];

export default routesConfig;
