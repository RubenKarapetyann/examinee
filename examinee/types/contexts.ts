import { ChooseExerciseType, SaveType, SectionInfoType, SectionNames, SentenceExerciseType } from "./global"

export type SectionsContextType = {
    sectionsData : Record<string, SectionInfoType>,
    changeSectionsData : (section: string, data: SectionInfoType)=> void,
    placeSectionsData : (data: Record<string, SectionInfoType> )=> void
}

export type SavesContextType = {
    saves : SaveType[],
    changeSaves : (exercise: SentenceExerciseType | ChooseExerciseType, section: SectionNames, isCurrentInSaves: boolean)=> void,
}