import { createContext, useContext, useState } from "react"
import { SectionInfoType } from "../types/global"
import { SectionsProviderProps } from "../types/components"
import { SectionsContextType } from "../types/contexts"



const SectionsContext = createContext<SectionsContextType | null>(null)

export default function SectionsProvider ({ children }: SectionsProviderProps){
    const [sectionsData, setSectionsData] = useState<Record<string, SectionInfoType>>({})

    const changeSectionsData = (section: string, data: SectionInfoType) => setSectionsData(sections=>({...sections, [section]: data}))
    const placeSectionsData = (data: Record<string, SectionInfoType>) => setSectionsData(data)

    return (
        <SectionsContext.Provider value={{sectionsData, changeSectionsData, placeSectionsData}}>
            {children}
        </SectionsContext.Provider>
    )
}

export const useSections = ()=> useContext(SectionsContext)