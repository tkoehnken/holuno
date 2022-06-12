import React from 'react';
import {t_ActionCard, t_Card, t_ColorCard, t_NumberCard, t_SpecialCard} from "types/Card";
import styles from './Card.module.css';
import {Row} from "../../index";
import {FiHelpCircle, FiRefreshCcw, FiSlash} from "react-icons/fi";

type t_props = t_Card & {
    style?: React.CSSProperties,
    className?: string,
};

const CardNumber = ({value}: { value: t_NumberCard["value"] }) => <div className={styles.numberCard}>{value}</div>;

const CardAction = ({value, inner = true}: { value: t_ActionCard["value"], inner?: boolean, outer?: boolean }) => {
    const className = inner ? styles.actionCard : '';
    switch (value) {
        case "+2":
            return <div style={inner ? {marginBottom: 20, marginRight: 15} : undefined}
                        className={className}>{value}</div>;
        case "Stop":
            return <FiSlash className={className}/>;
        case "DirectionSwitch":
            return <FiRefreshCcw className={className}/>
        default:
            return <div className={className}>{value}</div>;
    }
}

const Joker = ({plusFour = false}: { plusFour?: boolean}) => (
    <div className={styles.JokerContainer}>
        <Row className={styles.JokerRow}>
            <div className={`${styles.red} ${styles.JokerInner}`}>
                <img alt={'red'} className={styles.JokerImg}
                     src={`${process.env.PUBLIC_URL}/static/${getIcon("red")}`}/>
            </div>
            <div className={`${styles.blue} ${styles.JokerInner}`}>
                <img alt={'blue'} className={styles.JokerImg}
                     src={`${process.env.PUBLIC_URL}/static/${getIcon("blue")}`}/>
            </div>
        </Row>
        <Row className={styles.JokerRow}>
            <div className={`${styles.yellow} ${styles.JokerInner}`}>
                <img alt={'yellow'} className={styles.JokerImg}
                     src={`${process.env.PUBLIC_URL}/static/${getIcon("yellow")}`}/>
            </div>
            <div className={`${styles.green} ${styles.JokerInner}`}>
                <img alt={'green'} className={styles.JokerImg}
                     src={`${process.env.PUBLIC_URL}/static/${getIcon("green")}`}/>
            </div>
        </Row>
        {plusFour && <div className={styles.JokerInnerFour}>
            <div style={{marginBottom: 25, marginRight: 10}}>+4</div>
        </div>}
    </div>
)


const SpecialCard = (props: t_SpecialCard) => (
    <Joker plusFour={props.value === "Joker+4"} />
)

const getIcon = (color: t_ColorCard["color"]) => {
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

const TopBot = ({value, top, color, type}: t_Card & { top?: boolean }) => <Row
    className={styles[top ? 'top' : 'bottom']} style={color === "black" ? {color: "white"} : undefined}>
    {type !== "SpecialCard" ?
        <>
            <img className={styles.img} alt={color} src={`${process.env.PUBLIC_URL}/static/${getIcon(color)}`}/>
            {type === "ActionCard" ? <CardAction inner={false} value={value}/> : value}
        </>
        :
        <>
            {value === "Joker+4" && <>
                <div>+4</div>
                <div>+4</div>
            </>}
            {value === "Joker" && <><FiHelpCircle/><FiHelpCircle/></>}
        </>
    }


</Row>

const InnerCard = (props: t_Card) => {
    switch (props.type) {
        case "NumberCard":
            return <CardNumber value={props.value}/>;
        case "ActionCard":
            return <CardAction value={props.value}/>;
        case "SpecialCard":
            return <SpecialCard {...props} />;
    }
}

const Card = (props: t_props) => {
    return (
        <div style={props.style} className={`${styles.card} ${styles[props.type==="SpecialCard"?props.selectedColor??props.color:props.color]} ${props.className ?? ''}`}>
            <TopBot {...props} top/>
            <div className={styles.innerCard}>
                <div className={styles.cardContent}>
                    <InnerCard {...props} />
                </div>
            </div>
            <div className={styles.ellipse}/>
            <TopBot {...props} />
        </div>
    )
}

export default Card;
