import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({children, activeMenu}) {

    const [click, onClick] = useState(true);

    function onClickMenu(){
        onClick(click=>!click);
    }

    return (
        <div className={styles.container}>
            <Header onClickMenu={onClickMenu}/>
            <div className = {styles.layout}>
                {click ? <Menu activeMenu={activeMenu}/> : <div></div>}
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;