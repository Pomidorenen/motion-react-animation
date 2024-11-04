import React, {useEffect, useRef} from 'react';
import {animate, inView, motion, useInView} from 'framer-motion';
const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    useEffect(() => {
        console.log("element", isInView);
    }, [isInView]);
    const variants = {
        off:{opacity:0, y:50},
        on:{
            opacity: 1,
            y:0
        }
    }
    return (
        <motion.footer ref = {ref}
                       initial={{opacity: 0}}
                       variants={variants}
                       animate={isInView?"on":"off"}
            className="App-footer">

        </motion.footer>
    );
};

export default Footer;