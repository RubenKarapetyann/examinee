import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PALETTE } from "../constants/styles";
import { CardProps } from "../types/components";
import LoadingBar from "./LoadingBar";

export default function Card({ title, id, onOpen, route, section, tasksCount }:CardProps){
    const reached = section ? section.reachedNumber : 0
    const openHanle = ()=> onOpen(route)    
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={openHanle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.tasks}>{tasksCount} tasks</Text>
                <LoadingBar max={tasksCount} reached={reached}/>
                <Text style={[styles.percent, { color : `rgb(${255-Math.floor(reached/tasksCount*255)}, ${Math.floor(reached/tasksCount*255)}, 0)` }]}>{section ? Math.floor((section.reachedNumber / tasksCount) * 100) : 0}% completed</Text>
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
        alignItems : "center",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3
    },
    title : {
        color : PALETTE.main_text,
        fontSize : 20,
        marginTop : 10,
        fontFamily : "NunitoSans_700Bold"
    },
    percent : {
        color : PALETTE.succeed,
        fontSize : 15,
        fontFamily : "NunitoSans_400Regular"
    },
    tasks : {
        fontFamily : "NunitoSans_400Regular",
        fontSize : 10,
        marginBottom : 30
    }
})