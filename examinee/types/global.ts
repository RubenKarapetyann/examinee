export type DropdownItem = {
    name : string,
    id : string,
    mode : ModeType
}
export type SectionRoute = "Section_3" | "Section_5" | "Section_10" | "Section_8" | "Section_11"
export type SectionNames = "section3" | "section5" | "section10" | "section8" | "section11"

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
export type SentenceExerciseType = {
    id : string,
    number: number,
    text : string,
    repository : number,
    correct_answer : string,
    self_number : number
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
export type SaveType = (ChooseExerciseType & { section : SectionNames }) | (SentenceExerciseType & { section : SectionNames })