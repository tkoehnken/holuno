import React from 'react';
import {t_ActionCard, t_Card, t_NumberCard} from "types/Card";
import styles from './Card.module.css';
import {Row} from "../../index";
import {FiRefreshCcw, FiSlash} from "react-icons/fi";

type t_props = t_Card & {
    style?: React.CSSProperties,
    className?: string,
};

const CardNumber = ({value}: { value: t_NumberCard["value"] }) => <div className={styles.numberCard}>{value}</div>;

const CardAction = ({value}: { value: t_ActionCard["value"] }) => {
    switch (value) {
        case "+2":
            return <div style={{marginRight: 15}} className={styles.numberCard}>{value}</div>;
        case "Stop":
            return <FiSlash className={styles.numberCard} />;
        case "DirectionSwitch":
            return <FiRefreshCcw className={styles.numberCard} />
        default:
            return <div className={styles.numberCard}>{value}</div>;
    }
}

const getIcon = (color: t_Card["color"]) => {
    switch (color) {
        case "red":
            return 'deathSensei.png';
        case "blue":
            return 'bloop.png';
        case "green":
            return 'tako.png';
        case "yellow":
            return 'k.png';
    }
}

const TopBot = ({value, top, color}: { value: t_Card["value"], top?: boolean, color: t_Card["color"] }) => <Row
    className={styles[top ? 'top' : 'bottom']}>
    <img className={styles.img} src={`${process.env.PUBLIC_URL}/static/${getIcon(color)}`}/>
    {"string" === typeof value ? value : value}
</Row>

const Card = ({value, type, color, className, style}: t_props) => (
    <div style={style} className={`${styles.card} ${styles[color]} ${className ?? ''}`}>
        <TopBot value={value} top color={color}/>
        <div className={styles.innerCard}>
            <div className={styles.cardContent}>
                {type === "NumberCard" ? <CardNumber value={value}/> : <CardAction value={value}/>}
            </div>
        </div>
        <div className={styles.ellipse}/>
        <TopBot value={value} color={color}/>
    </div>
)

export default Card;
