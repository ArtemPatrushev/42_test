import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import styles from './Header.module.scss';

export const Header = ({ logoutThC, isAuth }) => {

    let Logout = () => {
        logoutThC();
    };

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__logoBlock}>
                    <img src={logo} alt="svg" />
                    <p>
                        Buy please
                    </p>
                </div>
                {isAuth
                    ? <button className={styles.header__login} onClick={Logout}>Log out</button>
                    : <NavLink to={'/signUp'} className={styles.header__login}>Log in</NavLink>}
            </div>
        </div>
    );
};
