import {motion} from "framer-motion";
import styles from "../styles/button.module.scss";
import PropTypes from "prop-types";
import {useState} from "react";

const Button = ({children,onClick}) => {
    const [play,setPlay] = useState(false);
    const variants = {
        play:{
            scale: [1,1.2,1],
            borderRadius:["16px","24px","16px"]},
        stop:{scale:1,borderRadius:"16px"}
    }
    const clickHandler = (e) => {
        setPlay(true);
        if(onClick)onClick(e);
        setTimeout(()=>{setPlay(false)},500);
    }
    return (
        <motion.button className={styles.btn}
                       onClick={clickHandler}
                       variants={variants}
                       animate={play?"play":"stop"}
        >
            {children}
        </motion.button>
    );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}
export default Button;