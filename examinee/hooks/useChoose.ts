import { useRef, useState } from "react"
import { useSections } from "../contexts/SectionsProvider"
import { ChooseExerciseType, SentenceExerciseType, StatsType } from "../types/global"
import { useChooseProps } from "../types/hooks"
import { PROGRESS_MODE, RANDOM_MODE } from "../constants/modes"
import { getRandomInt } from "../utils/global"
import { SECTIONS_MAP } from "../constants/sections"
import useSave from "./useSave"
import useAds from "./useAds"


export default function useChoose<ExT extends { correct_answer?: string | boolean }>({ data, section, mode, navigation }: useChooseProps<ExT>){
    const exercises: ExT[] = data
    const maxExercises = SECTIONS_MAP[section].tasksCount
    const sectionsContext = useSections()
    if(sectionsContext === null){
        return
    }
    const { sectionsData, changeSectionsData } = sectionsContext
    const sectionData = sectionsData[section] ? sectionsData[section] : {reachedNumber : 0}
    const [currentExercise, setCurrentExercise] = useState(mode === RANDOM_MODE ? exercises[getRandomInt(0,maxExercises)] : exercises[sectionData.reachedNumber])
    const [answered, setAnswered] = useState<false | string>(false)
    const statsRef = useRef<StatsType>({combo : 0, count: 0}).current
    useSave({mode, section, sectionData, navigation})
    useAds<ExT>({statsRef, currentExercise})

    const onChoose = (variant: string)=>{
        statsRef.count++
        if(variant === currentExercise.correct_answer){
            statsRef.combo++
        }else{
            statsRef.combo = 0
        }
        setAnswered(variant)
        if(mode === PROGRESS_MODE && sectionData.reachedNumber < maxExercises-1){
            changeSectionsData(section, {...sectionData, reachedNumber: sectionData.reachedNumber+1})
        }else if(mode === PROGRESS_MODE){
            changeSectionsData(section, {...sectionData, reachedNumber: 0})
        }
    }

    const onGoToNext = ()=>{
        setAnswered(false)
        setCurrentExercise(mode === RANDOM_MODE ? exercises[getRandomInt(0,maxExercises)] : exercises[sectionData.reachedNumber])
    }

    return {sectionData, currentExercise, answered, statsRef, onChoose, onGoToNext}
}