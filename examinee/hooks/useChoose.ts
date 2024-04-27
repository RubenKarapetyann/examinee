import { useEffect, useRef, useState } from "react"
import { useSections } from "../contexts/SectionsProvider"
import { ChooseExerciseType, StatsType } from "../types/global"
import { useChooseProps } from "../types/hooks"
import { PROGRESS_MODE, RANDOM_MODE } from "../constants/modes"
import { getRandomInt } from "../utils/global"
import { setItem } from "../utils/storage"
import { SECTIONS_MAP } from "../constants/sections"
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3216522349243958/5668440591';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['education', 'school', 'exam', 'learning'],
});

export default function useChoose({ data, section, mode, navigation }: useChooseProps){
    const exercises: ChooseExerciseType[] = data
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
    

    useEffect(()=>{
        const saveProgress = async ()=>{                        
            if(mode === PROGRESS_MODE){
                await setItem(section, sectionData)                
            }
        }

        navigation.addListener("beforeRemove", saveProgress)

        return ()=> navigation.removeListener("beforeRemove", saveProgress)
    }, [sectionData])

    useEffect(()=>{
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            interstitial.show()
        })

        if(statsRef.count % 30 === 0 && statsRef.count !== 0){
            interstitial.load();
        }

        return unsubscribe
    },[currentExercise])

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