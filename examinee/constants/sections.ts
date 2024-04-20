import { CardItem } from "../types/global"

export const SEC_3 = "section3"
const section_3: CardItem = {
    route : "Section_3",
    id : "3",
    title : "Section 3",
    name : SEC_3,
    tasksCount : 900
}

export const SEC_5 = "section5"
const section_5: CardItem = {
    route : "Section_5",
    id : "5",
    title : "Section 5",
    name : SEC_5,
    tasksCount : 480
}

export const SECTIONS = [section_3, section_5]
export const SECTIONS_MAP = {
    [SEC_3] : section_3,
    [SEC_5] : section_5
}