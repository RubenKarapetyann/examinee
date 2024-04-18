import { StyleSheet, Text, View } from "react-native";
import { FormProps } from "../types/components";
import Variant from "./Variant";

export default function Form({ text, variants, onChoose, correctAnswer, answered }: FormProps){
    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{text}</Text>
            </View>
            <View style={styles.variantsList}>
                {variants.map(variant=>{
                    return <Variant 
                        correctAnswer={correctAnswer} 
                        text={variant.text} 
                        key={variant.id} 
                        onChoose={onChoose} 
                        variant={variant.variant}
                        answered={answered}
                    /> // change this then
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        justifyContent : "center",
    },
    variantsList : {
        gap : 10
    },
    questionContainer : {
        marginBottom : 50,
        marginTop : 50,
    },
    question : {
        fontSize : 20,
        alignItems : "center",
    }
})