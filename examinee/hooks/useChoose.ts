import { useEffect, useRef, useState } from "react"
import { useSections } from "../contexts/SectionsProvider"
import { ChooseExerciseType, StatsType } from "../types/global"
import { useChooseProps } from "../types/hooks"
import { PROGRESS_MODE, RANDOM_MODE } from "../constants/modes"
import { getRandomInt } from "../utils/global"
import { setItem } from "../utils/storage"

export default function useChoose({ data, section, mode, navigation }: useChooseProps){
    const exercises: ChooseExerciseType[] = data
    const sectionsContext = useSections()
    if(sectionsContext === null){
        return
    }
    const { sectionsData, changeSectionsData } = sectionsContext
    const sectionData = sectionsData[section] ? sectionsData[section] : {reachedNumber : 0}
    const [currentExercise, setCurrentExercise] = useState(mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[sectionData.reachedNumber])
    const [answered, setAnswered] = useState<false | string>(false)
    const statsRef = useRef<StatsType>({combo : 0, count: 0}).current
    

    useEffect(()=>{
        const saveProgress = async ()=>{                        
            if(mode === PROGRESS_MODE){
                await setItem(section, sectionData)                
            }
        }

        navigation.addListener("beforeRemove", saveProgress)

        return ()=> navigation.removeListener("beforeRemove", saveProgress)
    }, [sectionData])

    const onChoose = (variant: string)=>{
        statsRef.count++
        if(variant === currentExercise.correct_answer){
            statsRef.combo++
        }else{
            statsRef.combo = 0
        }
        setAnswered(variant)
        if(mode === PROGRESS_MODE && sectionData.reachedNumber <= 900){
            changeSectionsData(section, {...sectionData, reachedNumber: sectionData.reachedNumber+1})
        }else if(mode === PROGRESS_MODE){
            changeSectionsData(section, {...sectionData, reachedNumber: 0})
        }
    }

    const onGoToNext = ()=>{
        setAnswered(false)
        setCurrentExercise(mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[sectionData.reachedNumber])
    }

    return {sectionData, currentExercise, answered, statsRef, onChoose, onGoToNext}
}