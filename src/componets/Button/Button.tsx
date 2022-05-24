import ActiveIndicator from "../ActiveIndicator/ActiveIndicator";
import React from "react";
import {IconType} from "react-icons";
import styles from "./Button.module.css";

type t_props = {
    Icon?: IconType,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string,
    style?: React.CSSProperties,
    type: "round" | "rectangle" | "transparent",
    loading?: boolean,
    text?: string,
    right?: boolean,
    buttonType?: "button" | "submit" | "reset",
    disable?: boolean

}

const Button = ({className, text, onClick, loading, style, Icon, type, right, buttonType, disable}: t_props) => {
    const _style = (right ? {marginLeft: text ? 4 : undefined} : {marginRight: text ? 4 : undefined});

    return (
        <button
            disabled={disable}
            onClick={onClick}
            title={text}
            type={buttonType ?? "button"}
            className={`
            ${styles.button} 
            ${type === "round" ? styles.round : ''} 
            ${type === "rectangle" ? styles.rectangle : ''}
            ${type === "transparent" ? styles.transparent : ''}
             ${className ?? ''}`}
            style={style}>
            <div style={{flexFlow: right ? "row-reverse" : "row"}} className={styles.row}>
                {Icon && (loading ? (<ActiveIndicator style={_style}/>) : (
                    <Icon style={{fontSize: '1.1em', ..._style}}/>))}
                {text}
            </div>
        </button>
    )
}
export default Button;
