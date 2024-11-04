import React from 'react';
import styles from "../styles/menu.module.scss";
import Button from "./Button.jsx";
import {motion} from "framer-motion";
import ToggleSwitch from "./ToggleSwitch.jsx";
import {useStore} from "../store/RootStoreContext.js";
const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const variants = {
        play:{borderRadius:"0",marginLeft:"0"},
        reverse:{borderRadius:"50%",marginLeft:"-240px"}
    }
    const {ThemeStore} = useStore();
    const {toggleTheme} = ThemeStore;
    return (
        <div className={styles.menu}>
            <div style={{position:"absolute",pointerEvents:"initial"}}>
                <Button onClick={()=>setIsOpen(!isOpen)}>
                    menu
                </Button>
            </div>
            <motion.div
                initial={{borderRadius:"50%",marginLeft:"-240px"}}
                variants={variants}
                animate={isOpen?"play" : "reverse"}
                className={styles["menu-container"]}>
                <div style={{position:"relative",transform:"translateY(200%)"}}>
                    <ToggleSwitch onToggle={toggleTheme}/>theme
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;