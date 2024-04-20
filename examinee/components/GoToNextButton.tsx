import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { PALETTE } from "../constants/styles";
import Icon from "react-native-vector-icons/FontAwesome5"
import { GoToNextButtonProps } from "../types/global";

export default function GoToNextButton({ onGoToNext }: GoToNextButtonProps){
    return (
        <View style={styles.goToNextButtonBackground}>
            <TouchableOpacity style={styles.button} onPress={onGoToNext}>
                <Icon name="arrow-right" size={70} color={"white"}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button : {
        borderRadius : 50,
        backgroundColor : PALETTE.succeed,
        height : 100,
        width : 100,
        justifyContent : "center",
        alignItems : "center"
    },
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