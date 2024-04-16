export type DropdownItem = {
    name : string,
    id : string,
    mode : ModeType
}
export type SectionRoute = "Section_3"

export type CardItem = {
    title : string,
    id : string,
    route : SectionRoute,
}
export type ModeType = "random" | "progress"