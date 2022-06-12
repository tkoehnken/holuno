import React, {useState} from 'react';
import {t_Card, t_NumberCard, t_ActionCard, t_ColorCard, t_SpecialCard} from "types/Card";
import {Button, Card, Row} from "componets";

const colors: t_ColorCard["color"][] = ["red", "blue", "green", "yellow"];
const actions: t_ActionCard["value"][] = ["+2", "Stop", "DirectionSwitch"];
const specials: t_SpecialCard["value"][] = ["Joker+4", "Joker"];

const Test = () => {
    const [selectedColor, setSelectedColor] = useState<undefined | t_ColorCard["color"]>(undefined);

    const genCards = () => {

        return colors.map((color) => {
            const cards: t_Card[] = [];
            for (let i = 0; i < 10; ++i) {
                cards.push({type: "NumberCard", color, value: i as t_NumberCard["value"]})
            }
            actions.forEach((action) => cards.push({type: "ActionCard", color, value: action}));
            specials.forEach((specials) => cards.push({
                type: "SpecialCard",
                color: 'black',
                value: specials
            }));
            return cards;
        })
    }

    return (
        <>
            <h1>Test</h1>
            <div>
                {genCards().map((cards) => <Row key={cards[0].color} style={{
                    flexWrap: 'wrap',
                    justifyContent: "space-evenly",
                    marginBottom: 20
                }}>{cards.map((card) => <Card key={card.value} style={{margin: 10}} {...card} />)}</Row>)}
            </div>
            <div style={{marginTop: 20}}>
                <Card
                    color={'black'}
                    type={'SpecialCard'}
                    value={'Joker'}
                    selectedColor={selectedColor}
                />
                {colors.map((color)=><Button type={"rectangle"} text={color} onClick={() => setSelectedColor(color)}/>)}

            </div>
        </>
    )
}

export default Test;
