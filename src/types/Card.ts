
export type t_ColorCard = {color: 'red'|'green'|'yellow'|'blue'} & (t_NumberCard | t_ActionCard);


export type t_NumberCard = {
    type: "NumberCard",
    value: 0|1|2|3|4|5|6|7|8|9
}

export type t_ActionCard = {
    type: "ActionCard",
    value: "+2"|"Stop"|"DirectionSwitch"
}

export type t_SpecialCard = {
    type: "SpecialCard",
    value: "Joker"|"Joker+4",
    color: 'black',
    selectedColor?: t_ColorCard["color"]
}

export type t_Card = t_ColorCard|t_SpecialCard
