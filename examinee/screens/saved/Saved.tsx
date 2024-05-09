import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ChooseExerciseType, SaveType, SectionNames, SentenceExerciseType } from "../../types/global";
import SavedCard from "../../components/SavedCard";
import Choose from "../../components/Choose";
import { PROGRESS_MODE } from "../../constants/modes";
import { useSaves } from "../../contexts/SavesProvider";
import { SavedProps } from "../../types/components";
import SaveButton from "../../components/SaveButton";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/FontAwesome"
import { useTheme } from "../../contexts/ThemeProvider";
import { THEME_PALETTE } from "../../constants/styles";


export default function Saved({ navigation }: SavedProps){
    const [choseExercise, setChoseExercise] = useState<false | ChooseExerciseType | SentenceExerciseType>(false)
    const savesContext = useSaves()
    const { theme } = useTheme()
    if(!savesContext){
        return
    }
    const { saves } = savesContext

    const chooseHandle = (exercise: SaveType)=> {
        setChoseExercise(exercise)
        navigation.setOptions({
            headerRight: ()=> SaveButton<ChooseExerciseType | SentenceExerciseType>({exercise, section : exercise.section})
        })
    }
    const backHandle = ()=> {
        setChoseExercise(false)
        navigation.setOptions({
            headerRight: ()=> <Icon name="bookmark" size={30} style={{marginRight : 30}}/>
        })
    }

    return (
        <View style={{backgroundColor : THEME_PALETTE[theme].background}}>
            {choseExercise ? 
            <>
                <Choose
                    exercise={"variants" in choseExercise ? choseExercise : {...choseExercise, 
                        variants : [{
                            text: "The senctence is correct",
                            id : "true",
                            variant : "true"
                        }, {
                            text : "The senctence is incorrect",
                            id : "false",
                            variant : "false"
                        }]  
                    }}  
                    sectionData={{reachedNumber : -1}}  
                    mode={PROGRESS_MODE}
                    stats={{ combo: 0, count : 0 }}
                    answered={choseExercise.correct_answer}
                    onChoose={()=>{}}
                />
                <View style={styles.buttonContainer}><Button icon="arrow-back" width={75} height={75} handle={backHandle}/></View>
            </> : 
            <View style={styles.container}><ScrollView style={styles.scroll}>{saves.map(saved=><SavedCard
                key={saved.id}
                section={saved.section}
                exercise={saved}
                handle={chooseHandle}
            />)}</ScrollView></View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
        padding : 10,
        gap : 10,
        alignItems : "center",
    },
    scroll : {
        width : "100%",
        padding : 10,
    },
    buttonContainer : {
        position : "absolute",
        width : "100%",
        height : "100%",
        alignItems : "center",
        justifyContent : "flex-end",
        bottom : 50
    }
})