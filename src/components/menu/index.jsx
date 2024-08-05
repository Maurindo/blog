import styles from './menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className={styles.principal}>
            <div className={styles.corpo}>
                <span><Link to="/">HOME</Link></span>
                |
                <span><Link to={"/biografia"}>BIOGRAFIA</Link></span>
                |
                <span><Link to={"/cp"}>CAMPANHAS PUBLICITÁRIAS</Link></span>
                |
                <span><Link to={"/contato"}>CONTATO</Link></span>
            </div>
        </div>
    );
}

export default Menu;