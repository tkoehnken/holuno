import React from 'react';
import {t_ActionCard, t_Card, t_NumberCard} from "types/Card";
import styles from './Card.module.css';

type t_props = t_Card & {
    style?: React.CSSProperties,
    className?: string,
};

const CardNumber = ({value}: { value: t_NumberCard["value"] }) => <div className={styles.numberCard}>{value}</div>;

const CardAction = ({value}: { value: t_ActionCard["value"] }) => <div>{value}</div>;

const Card = ({value, type, color, className, style}: t_props) => (
    <div style={style} className={`${styles.card} ${styles[color]} ${className ?? ''}`}>
        <div className={styles.innerCard}>
            {/*<div className={styles.image}/>*/}
            <div className={styles.cardContent}>
                {type === "NumberCard" ? <CardNumber value={value}/> : <CardAction value={value}/>}
            </div>
        </div>
        <div className={styles.ellipse}/>
    </div>
)

export default Card;
