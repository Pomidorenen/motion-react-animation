import {useState} from "react";
import { Reorder, motion } from "framer-motion"
import Button from "./Button.jsx";
import {text} from "../data/textPlaceholder.js";
const List = () => {
    const [items, setItems] = useState([0, 1, 2, 3]);
    return (
        <Reorder.Group axis={"x"} values={items} onReorder={setItems}>
            <div className="list">
                <h1> list card</h1>
                <div className={"list-item"}>
                {items.map(item => (
                    <Reorder.Item
                        whileDrag={{scale: 1.2}}
                        style={{listStyle: "none"}} key={item} value={item}>
                        <div className={"card"}>
                            <div className="card-header">Title #{item}</div>
                            <div className={"card-body"}>
                                <motion.img width={"100%"} height={"120px"} src="../../public/assets/img.png"/>
                                <p>{text}</p>
                            </div>
                            <div className="card-footer">
                                <Button>info</Button>
                            </div>
                        </div>
                    </Reorder.Item>
                ))}
                </div>
            </div>
        </Reorder.Group>
    );
};

export default List;