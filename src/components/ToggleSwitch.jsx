import { useState} from "react";
import {motion} from "framer-motion";
import styles from "../styles/toggle.module.scss";
import {observer} from "mobx-react-lite";


const ToggleSwitch = observer(({onToggle}) => {
    const [toggle, setToggle] = useState(true);

    const toggleButton = () => {
        setToggle(prev=>!prev);
        onToggle(toggle)
    }

    return (
        <motion.div toggle={String(toggle)}
                    onClick={toggleButton}
                    className={styles.toggle}
                   >
            <span></span>
        </motion.div>
    );
});

export default ToggleSwitch;