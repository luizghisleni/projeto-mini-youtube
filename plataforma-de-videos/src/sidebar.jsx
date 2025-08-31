import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>Plataforma de Vídeos</h2>
      <ul className={styles.navList}>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/videos">
            <FontAwesomeIcon icon={faVideo} /> Vídeos
          </Link>
        </li>
        <li>
          <Link to="/perfil">
            <FontAwesomeIcon icon={faUser} /> Perfil
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;