import React, {useRef} from "react";
import styles from "./ActiveIndicator.module.css";

type t_props = {
    className?: string,
    style?: React.CSSProperties,
    img?: boolean
}

const ActiveIndicator = ({className, style, img}: t_props) => {
    const ref = useRef<HTMLDivElement>(null);


    if (img)
        return (
            <div style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "min-content"
            }}>
                <div ref={ref} style={style} className={`${className ?? ''} ${styles.loader}`}/>
                <img alt={'404'} style={{position: "absolute", height: (ref.current?.offsetHeight ?? 100) * 0.8}}
                     src={`${process.env.PUBLIC_URL}/static/loading.gif`}/>
            </div>
        )

    return (
        <div ref={ref} style={style} className={`${className ?? ''} ${styles.loader}`}/>
    )
}
export default ActiveIndicator;
