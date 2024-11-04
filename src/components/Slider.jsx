import {AnimatePresence, motion, wrap} from "framer-motion";
import {imageData} from "../data/image.js";
import {useState} from "react";
import style from "../styles/slider.module.scss";
import {text} from "../data/textPlaceholder.js";

const Slider = () => {
    const [[page,direction],setPage] = useState([0,0]);
    const imagesIndex = wrap(0,imageData.length,page);
    const paginate = (newDirection)=>{
        setPage([page+newDirection,newDirection])
    }
    return (
        <div className={style.slider}>
            <div className={style["slider-container"]}>
            <AnimatePresence>
                <motion.img
                    initial={{opacity:0,y:400}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0}}
                    className={style.image}
                    src={imageData.map(el => "../../public/assets/" + el)[imagesIndex]}/>
                    key={imagesIndex}
            </AnimatePresence>
                <div className={style.footer}>
                    {text}
                </div>
            </div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                className={style.arrow} onClick={() => paginate(+1)}>
                &#x2023;
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                className={style.arrow} onClick={() => paginate(-1)}>
                &#x2023;
            </motion.div>

        </div>
    );
};

export default Slider;