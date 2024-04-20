import { StyleSheet, Text, View } from "react-native";
import { Section_3Types } from "../../types/components";
import Form from "../../components/Form";
import data from "../../data/section_3.json"
import { useEffect, useRef, useState } from "react";
import { ChooseExerciseType, SectionInfoType } from "../../types/global";
import GoToNextButton from "../../components/GoToNextButton";
import { PROGRESS_MODE, RANDOM_MODE } from "../../constants/modes";
import { getRandomInt } from "../../utils/global";
import { setItem } from "../../utils/storage";
import { SEC_3 } from "../../constants/sections";
import { useSections } from "../../contexts/SectionsProvider";

export default function Section_3({ navigation, route }: Section_3Types){    
    const exercises: ChooseExerciseType[] = data
    const sectionsContext = useSections()
    if(sectionsContext === null){
        return
    }
    const { sectionsData, changeSectionsData } = sectionsContext
    const sectionData = sectionsData[SEC_3] ? sectionsData[SEC_3] : {reachedNumber : 0}
    const [currentExercise, setCurrentExercise] = useState(route.params.mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[sectionData.reachedNumber])
    const [answered, setAnswered] = useState<false | string>(false)
    const statsRef = useRef({combo : 0, count: 0}).current
    

    useEffect(()=>{
        const saveProgress = async ()=>{                        
            if(route.params.mode === PROGRESS_MODE){
                await setItem(SEC_3, sectionData)                
            }
        }

        navigation.addListener("beforeRemove", saveProgress)

        return ()=> navigation.removeListener("beforeRemove", saveProgress)
    }, [sectionData])

    const onChoose = (variant: string)=>{
        statsRef.count++
        setAnswered(variant)
        if(route.params.mode === PROGRESS_MODE && sectionData.reachedNumber <= 900){
            changeSectionsData(SEC_3, {...sectionData, reachedNumber: sectionData.reachedNumber+1})
        }else if(route.params.mode === PROGRESS_MODE){
            changeSectionsData(SEC_3, {...sectionData, reachedNumber: 0})
        }
    }

    const onGoToNext = ()=>{
        setAnswered(false)
        setCurrentExercise(route.params.mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[sectionData.reachedNumber])
    }

    return (
        <>
            <Text>{route.params.mode === PROGRESS_MODE ? "level: " : "count: "}{route.params.mode === PROGRESS_MODE ? sectionData.reachedNumber : statsRef.count}</Text>
            <View>
                <Text>repository: {currentExercise.repository}</Text>
                <Text>exercise: {currentExercise.number}</Text>
            </View>
            {answered && <View style={styles.goToNextButtonBackground}>
                <GoToNextButton onGoToNext={onGoToNext}/>
            </View>}
            <Form 
                text={currentExercise.text} 
                variants={currentExercise.variants} 
                onChoose={onChoose}
                correctAnswer={currentExercise.correct_answer}
                answered={answered}
            />
        </>
    )
} 

const styles = StyleSheet.create({
    goToNextButtonBackground : {
        width : "100%",
        height : "100%",
        position : "absolute",
        backgroundColor : "rgba(0, 0, 0, 0.1)",
        zIndex : 2,
        alignItems : "center",
        justifyContent : "flex-end",
        padding : 50
    }
})