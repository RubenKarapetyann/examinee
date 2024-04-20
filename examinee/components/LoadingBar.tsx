import { StyleSheet } from "react-native";
import { View } from "react-native";
import { PALETTE } from "../constants/styles";
import { LoadingBarProps } from "../types/components";

export default function LoadingBar ({ reached, max }: LoadingBarProps){
    const len = (reached / max) * 100    
    return (
        <View style={styles.container}>
            <View style={styles.barBackground}>
                <View style={[styles.bar, {width : `${len}%`}]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 40,
        padding : 10,
        alignItems : "center",
    },
    barBackground : {
        width : "90%",
        height : 25,
        backgroundColor : "black",
        borderRadius : 20,
        alignItems : "flex-start",
        justifyContent : "center",
        padding : 5
    },
    bar : {
        backgroundColor : PALETTE.succeed,
        height : 15,
        borderRadius : 17
    }
})