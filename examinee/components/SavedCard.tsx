import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PALETTE, THEME_PALETTE } from "../constants/styles";
import { SavedCardProps } from "../types/components";
import { SECTIONS_MAP } from "../constants/sections";
import { useTheme } from "../contexts/ThemeProvider";

export default function SavedCard({ section, exercise, handle }: SavedCardProps){    
    const pressHandle = ()=> handle(exercise)
    const { theme } = useTheme()
    const palette = THEME_PALETTE[theme]
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor : palette.card_background}]} onPress={pressHandle}>
            <View>
                <Text style={[styles.title, {color : palette.main_text}]}>{SECTIONS_MAP[section].id}</Text>    
            </View>
            <View>
                <Text style={[styles.number, {color : palette.main_text}]}>exercise✏️: {exercise.number}</Text>
                <Text style={[styles.number, {color : palette.main_text}]}>repository📙: {exercise.repository}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "95%",
        height : 80,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor : PALETTE.card_background,
        borderRadius : 15,
        padding : 10,
        alignItems : "center",
        justifyContent : "space-around",
        flexDirection : "row",
        marginBottom : 10,
        marginLeft : "auto",
        marginRight : "auto"
    },
    title : {
        fontSize : 30,
        fontFamily : "NunitoSans_700Bold",
        marginBottom : 10
    },
    number : {
        fontFamily : "NunitoSans_400Regular"
    }
})