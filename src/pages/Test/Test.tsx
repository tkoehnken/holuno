import React from 'react';
import {t_Card, t_NumberCard, t_ActionCard} from "types/Card";
import {Card, Row} from "componets";

const Test = () => {
    const genCards = () => {
        const colors: t_Card["color"][] = ["red", "blue", "green", "yellow"];
        const actions: t_ActionCard["value"][] = ["+2", "Joker", "Joker+4", "DirectionSwitch", "Stop"]
        return colors.map((color) => {
            const cards: t_Card[] = [];
            for (let i = 0; i < 10; ++i) {
                cards.push({type: "NumberCard", color, value: i as t_NumberCard["value"]})
            }
            actions.forEach((action) => cards.push({type: "ActionCard", color, value: action}))
            return cards;
        })
    }

    return (
        <>
            <h1>Test</h1>
            <div>
            {genCards().map((cards) =><Row key={cards[0].color} style={{flexWrap: 'wrap',justifyContent: "space-evenly",marginBottom: 20}}>{cards.map((card)=><Card key={card.value} style={{margin: 10}} {...card} />)}</Row>)}
            </div>
        </>
    )
}

export default Test;
