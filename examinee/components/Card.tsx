import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PALETTE } from "../constants/styles";
import { CardProps } from "../types/components";
import LoadingBar from "./LoadingBar";

export default function Card({ title, id, onOpen, route, section, tasksCount }:CardProps){
    const openHanle = ()=> onOpen(route)    
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={openHanle}>
                <Text style={styles.title}>{title}</Text>
                <LoadingBar max={tasksCount} reached={section ? section.reachedNumber : 0}/>
                <Text style={styles.percent}>{section ? Math.floor((section.reachedNumber / tasksCount) * 100) : 0}% completed</Text>
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
        marginTop : 10,
        marginBottom : 30,
        fontFamily : "NunitoSans_700Bold"
    },
    percent : {
        color : PALETTE.succeed,
        fontSize : 18,
        fontFamily : "NunitoSans_400Regular"
    }
})