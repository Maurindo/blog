import styles from './menu.module.css';

const Menu = () => {
    return(
        <div className={styles.principal}>
            <div className={styles.corpo}>
                <span>HOME</span>
                |
                <span>BIOGRAFIA</span>
                |
                <span>CAMPANHAS PUBLICITÁRIAS</span>
                |
                <span>CONTATO</span>
            </div>
        </div>
    );
}

export default Menu;