import styles from './Header.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import React, {useState} from 'react';

function Header({onClickMenu}){
    return (
        <div className={styles.header}>
            <div>
                <GiHamburgerMenu className={styles.icon} onClick={onClickMenu}/>
            </div>
        </div>
    );
}

export default Header;