

export type t_NumberCard = {
    type: "NumberCard",
    value: 0|1|2|3|4|5|6|7|8|9
}

export type t_ActionCard = {
    type: "ActionCard",
    value: "+2"|"Joker"|"Joker+4"|"DirectionSwitch"|"Stop"
}

export type t_Card = {color: 'red'|'green'|'yellow'|'blue'} & (t_NumberCard | t_ActionCard)
