import { SectionInfoType } from "./global"

export type SectionsContextType = {
    sectionsData : Record<string, SectionInfoType>,
    changeSectionsData : (section: string, data: SectionInfoType)=> void,
    placeSectionsData : (data: Record<string, SectionInfoType> )=> void
}