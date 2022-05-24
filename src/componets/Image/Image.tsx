import React, {useState} from "react";
import styles from "./Image.module.css";
import ActiveIndicator from "../ActiveIndicator/ActiveIndicator";

type t_props = {
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    style?: React.CSSProperties,
    onClick?: ()=>void,
    Overlay?: JSX.Element,
    className?: string,
    imgContainerClassName?: string
}

const Image = ({src, height, width, style, className,Overlay , imgContainerClassName, alt,onClick}: t_props) => {
    const [loading, setLoading] = useState(true);


    return (
        <div onClick={onClick} className={`${styles.container} ${imgContainerClassName ?? ''}`}>
            <img
                src={src}
                alt={alt ?? '404'}
                loading={"lazy"}
                onLoad={() => setLoading(false)}
                onError={(elm)=>elm.currentTarget.src=`${process.env.PUBLIC_URL}/static/gawr-gura.png`}
                height={height}
                width={width}
                style={style}
                className={`${styles.image} ${loading ? styles.imageLoad : styles.imageLoaded} ${className ?? ''}`}
            />
            {Overlay&&<div className={styles.loadWrapper} style={{width,height}}>{Overlay}</div>}
            {loading && <div className={styles.loadWrapper} style={{width,height}}><ActiveIndicator
                img={(width!==undefined && height!==undefined && width >= 100 && height >= 100)} className={styles.loader}/></div>}
        </div>
    )
}
export default Image;
