import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { ChooseProps } from "../types/components";
import { PALETTE, THEME_PALETTE } from "../constants/styles";
import Form from "./Form";
import { PROGRESS_MODE } from "../constants/modes";
import { useTheme } from "../contexts/ThemeProvider";

export default function Choose({exercise, sectionData, mode, stats, answered, onChoose}: ChooseProps){
    const { theme } = useTheme()
    const palette = THEME_PALETTE[theme]
    return (
        <View style={[styles.container, { backgroundColor : palette.background }]}>
            <View style={[styles.header, { backgroundColor : palette.card_background }]}>
                <Text style={[styles.level, {color : palette.main_text}]}>{mode === PROGRESS_MODE ? `LEVEL ${sectionData.reachedNumber+1}` : "RANDOM"}</Text>
                <View style={styles.stats}>
                    <View>
                        <View style={styles.statsRow}><Text style={{color : palette.main_text}}>combo🔥:  </Text><Text style={[styles.statsNumber, {color : palette.main_text}]}>{stats.combo}</Text></View>
                        <View style={styles.statsRow}><Text style={{color : palette.main_text}}>done✅️:  </Text><Text style={[styles.statsNumber, {color : palette.main_text}]}>{stats.count}</Text></View>
                    </View>
                    <View>
                        <View style={styles.statsRow}><Text style={{color : palette.main_text}}>repository📙:  </Text><Text style={[styles.statsNumber, {color : palette.main_text}]}>{exercise.repository}</Text></View>
                        <View style={styles.statsRow}><Text style={{color : palette.main_text}}>exercise✏️:  </Text><Text style={[styles.statsNumber, {color : palette.main_text}]}>{exercise.number}</Text></View>
                    </View>
                </View>
            </View>
            <View style={[styles.questionContainer, {backgroundColor : palette.card_background}]}>
                <Text style={[styles.question, {color : palette.main_text}]}>{exercise.text.trim()}</Text>
            </View>
            <Form 
                variants={exercise.variants} 
                onChoose={onChoose}
                correctAnswer={exercise.correct_answer}
                answered={answered}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : "100%",
        width : "100%",
        padding : 20,
        gap : 20
    },
    header : {  
        width : "100%",
        height : 85,
        backgroundColor : PALETTE.background,
        alignItems : "center",
        justifyContent : "center"
    },
    level : {
        fontSize : 22,
        fontWeight : "bold",
        marginBottom : 5
    },
    stats : {
        flexDirection : "row",
        justifyContent : "space-around",
        width : "100%"
    },
    statsNumber : {
        fontWeight : "bold"
    },
    statsRow : {
        flexDirection : "row"
    },
    questionContainer : {
        backgroundColor : PALETTE.background,
        width : "100%",
        height: "auto",
        minHeight : 150,
        padding : 10,
    },
    question : {
        fontSize : 18
    }
})