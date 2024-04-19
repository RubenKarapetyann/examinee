import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { VariantProps } from "../types/components";
import { PALETTE } from "../constants/styles";

export default function Variant({ text, onChoose, variant, correctAnswer, answered }: VariantProps){
    const chooseHandle = ()=> onChoose(variant)
    const bgColor = (answered && correctAnswer === variant) ? PALETTE.succeed : (answered === variant && variant !== correctAnswer) ? PALETTE.fail : PALETTE.card_background
    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: bgColor}} onPress={chooseHandle}>
            <Text style={styles.text}>{variant + ") " + text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "auto",
        backgroundColor : PALETTE.card_background,
        borderRadius : 10,
        padding : 5,
        justifyContent : "center",
        alignItems : "center",
        minHeight : 50
    },
    text : {
        fontSize : 25,
        color : PALETTE.secondary_text
    }
})