import { createContext, useContext, useEffect, useState } from "react"
import { ChooseExerciseType, SaveType, SectionNames, SentenceExerciseType } from "../types/global"
import { SectionsProviderProps } from "../types/components"
import { SavesContextType } from "../types/contexts"
import { getSavedItems, setSavedItem } from "../utils/storage"

const SavesContext = createContext<SavesContextType | null>(null)

export default function SavesProvider({ children }: SectionsProviderProps){
    const [saves, setSaves] = useState<SaveType[]>([])

    useEffect(()=>{
        const getSaves = async ()=>{
            const savedItems = await getSavedItems()
            if(savedItems){
                setSaves(savedItems)                
            }
        }
        getSaves()
    },[])

    const changeSaves = async (exercise: SentenceExerciseType | ChooseExerciseType, section : SectionNames, isCurrentInSaves: boolean)=>{
        const newSaves = isCurrentInSaves ? 
                saves.filter(save=>(save.id !== exercise.id && save.section === section)) :
                [...saves, {...exercise, section}]
        setSaves(newSaves)
        await setSavedItem(newSaves)
    }   

    return (
        <SavesContext.Provider value={{saves, changeSaves}}>
            {children}
        </SavesContext.Provider>
    )
}

export const useSaves = ()=> useContext(SavesContext)