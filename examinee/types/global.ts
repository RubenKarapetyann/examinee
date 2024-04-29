export type DropdownItem = {
    name : string,
    id : string,
    mode : ModeType
}
export type SectionRoute = "Section_3" | "Section_5" | "Section_10"
export type SectionNames = "section3" | "section5" | "section10"

export type CardItem = {
    title : string,
    id : string,
    route : SectionRoute,
    name : string,
    tasksCount: number
}
export type ModeType = "random" | "progress"
export type ChooseExerciseType = {
    id : string,
    number: number,
    text : string,
    variants : Variant[],
    repository : number,
    correct_answer : string
}
export type Variant = {
    text : string,
    id : string,
    variant : string
}
export type GoToNextButtonProps = {
    onGoToNext : ()=> void
}
export type SectionInfoType = {
    reachedNumber : number
}
export type StatsType = {
    count : number,
    combo : number
}