import { StyleSheet } from "react-native";
import { View } from "react-native";
import { PALETTE, THEME_PALETTE } from "../constants/styles";
import { LoadingBarProps } from "../types/components";
import { useTheme } from "../contexts/ThemeProvider";

export default function LoadingBar ({ reached, max }: LoadingBarProps){
    const len = (reached / max) * 100
    const { theme } = useTheme()
    return (
        <View style={styles.container}>
            <View style={[styles.barBackground, { backgroundColor : THEME_PALETTE[theme].background_secondary }]}>
                <View style={[styles.bar, {
                    width : `${len}%`, 
                    backgroundColor : `rgb(${255-Math.floor(reached/max*255)}, ${Math.floor(reached/max*255)}, 0)`
                }]}></View>
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
        height : 20,
        backgroundColor : "black",
        borderRadius : 20,
        alignItems : "flex-start",
        justifyContent : "center",
        padding : 5
    },
    bar : {
        backgroundColor : PALETTE.succeed,
        height : 10,
        borderRadius : 17
    }
})