import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DropdownItemProps } from "../types/components";
import { PALETTE } from "../constants/styles";

export default function DropdownItem({ name, id, onStart, mode }: DropdownItemProps){
    const startHandle = ()=> onStart(mode)
    return (
        <TouchableOpacity style={styles.container} onPress={startHandle}>
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : 50,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : PALETTE.card_background,
        borderRadius : 10
    },
    title : {
        fontSize : 19
    }
})