import { StyleSheet, Text, View } from "react-native";
import { Section_3Types } from "../../types/components";
import Form from "../../components/Form";
import data from "../../data/section_3.json"
import { useState } from "react";
import { ChooseExerciseType } from "../../types/global";
import GoToNextButton from "../../components/GoToNextButton";
import { RANDOM_MODE } from "../../constants/modes";
import { getRandomInt } from "../../utils/global";

export default function Section_3({ navigation, route }: Section_3Types){
    const exercises: ChooseExerciseType[] = data
    const [currentExercise, setCurrentExercise] = useState(route.params.mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[899])
    const [answered, setAnswered] = useState<false | string>(false)

    const onChoose = (variant: string)=>{
        setAnswered(variant)
    }

    const onGoToNext = ()=>{
        setAnswered(false)
        setCurrentExercise(route.params.mode === RANDOM_MODE ? exercises[getRandomInt(0,900)] : exercises[100])
    }

    return (
        <>
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