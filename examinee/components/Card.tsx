import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PALETTE } from "../constants/styles";
import { CardProps } from "../types/components";

export default function Card({ title, id, onOpen, route }:CardProps){
    const openHanle = ()=> onOpen(route)
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={openHanle}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : 150,
        height : 150,
        borderRadius : 10,
        backgroundColor : PALETTE.card_background,
        alignItems : "center"
    },
    title : {
        color : PALETTE.main_text,
        fontSize : 20,
        fontWeight : "bold"
    }
})