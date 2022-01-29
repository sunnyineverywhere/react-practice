import styles from './Header.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import React, {useState} from 'react';

function Header({onClickMenu}){

    const [value, setValue] = useState('');

    function onClick() {
        console.log(value);
        setValue('');
    }

    function onChange(event){
        setValue(event.target.value);
    }

    return (
        <div className={styles.header}>
            <div>
                <GiHamburgerMenu className={styles.icon} onClick={onClickMenu}/>
                <input onChange={onChange} value = {value} />
                <button onClick={onClick}>검색</button>
            </div>
        </div>
    );
}

export default Header;