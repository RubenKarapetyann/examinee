import { CardItem } from "../types/global"

export const SEC_3 = "section3"
const section_3: CardItem = {
    route : "Section_3",
    id : "3",
    title : "Section 3",
    name : SEC_3,
    tasksCount : 900
}

export const SECTIONS = [section_3]
export const SECTIONS_MAP = {
    [SEC_3] : section_3
}