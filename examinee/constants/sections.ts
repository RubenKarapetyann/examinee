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

export const SEC_10 = "section10"
const section_10: CardItem = {
    route : "Section_10",
    id : "10",
    title : "Section 10",
    name : SEC_10,
    tasksCount : 470 //500 
}

export const SEC_8 = "section8"
const section_8: CardItem = {
    route : "Section_8",
    id : "8",
    title : "Section 8",
    name : SEC_8,
    tasksCount : 1000 
}


export const SECTIONS = [section_3, section_5, section_8, section_10]
export const SECTIONS_MAP = {
    [SEC_3] : section_3,
    [SEC_5] : section_5,
    [SEC_10] : section_10,
    [SEC_8] : section_8
}