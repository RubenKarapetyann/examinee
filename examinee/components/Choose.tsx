import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { ChooseProps } from "../types/components";
import { PALETTE } from "../constants/styles";
import Form from "./Form";
import { PROGRESS_MODE } from "../constants/modes";

export default function Choose({exercise, sectionData, mode, stats, answered, onChoose}: ChooseProps){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.level}>{mode === PROGRESS_MODE ? `LEVEL ${sectionData.reachedNumber}` : "RANDOM"}</Text>
                <View style={styles.stats}>
                    <View>
                        <View style={styles.statsRow}><Text>combo🔥:  </Text><Text style={styles.statsNumber}>{stats.combo}</Text></View>
                        <View style={styles.statsRow}><Text>done✅️:  </Text><Text style={styles.statsNumber}>{stats.count}</Text></View>
                    </View>
                    <View>
                        <View style={styles.statsRow}><Text>repository📙:  </Text><Text style={styles.statsNumber}>{exercise.repository}</Text></View>
                        <View style={styles.statsRow}><Text>exercise✏️:  </Text><Text style={styles.statsNumber}>{exercise.number}</Text></View>
                    </View>
                </View>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{exercise.text.trim()}</Text>
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
        height : 80,
        backgroundColor : PALETTE.background,
        alignItems : "center"
    },
    level : {
        fontSize : 22,
        fontWeight : "bold"
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