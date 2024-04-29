import { useEffect } from "react"
import { useSaveProps } from "../types/hooks"
import { PROGRESS_MODE } from "../constants/modes"
import { setItem } from "../utils/storage"

export default function useSave({ mode, sectionData, section, navigation }: useSaveProps){
    useEffect(()=>{
        const saveProgress = async ()=>{                        
            if(mode === PROGRESS_MODE){
                await setItem(section, sectionData)                
            }
        }

        navigation.addListener("beforeRemove", saveProgress)

        return ()=> navigation.removeListener("beforeRemove", saveProgress)
    }, [sectionData])
}