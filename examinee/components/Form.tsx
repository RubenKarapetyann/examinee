import { StyleSheet, View } from "react-native";
import { FormProps } from "../types/components";
import Variant from "./Variant";

export default function Form({ variants, onChoose, correctAnswer, answered }: FormProps){
    return (
        <View style={styles.container}>
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
        paddingTop : 15,
        justifyContent : "center",
        width : "100%"
    },
    variantsList : {
        gap : 10
    }
})