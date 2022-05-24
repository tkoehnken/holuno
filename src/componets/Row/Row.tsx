import React, {HTMLProps} from "react";
import styles from "./Row.module.css";

type t_props = HTMLProps<HTMLDivElement>

const Row=(props:t_props)=>{
    return (
        <div {...props} className={`${styles.row} ${props.className??''}`} />
    )
}
export default Row;