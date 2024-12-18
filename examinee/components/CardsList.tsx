import { StyleSheet, View } from "react-native";
import { CardsListProps } from "../types/components";
import Card from "./Card";
import { useTheme } from "../contexts/ThemeProvider";
import { THEME_PALETTE } from "../constants/styles";

export default function CardsList({ cards, onOpen, sections }: CardsListProps){
    const { theme } = useTheme()
    return (
        <View style={[styles.background, { backgroundColor : THEME_PALETTE[theme].background }]}>
            <View style={styles.container}>
                {cards.map(card=>{
                    return <Card tasksCount={card.tasksCount} section={sections[card.name]} route={card.route} title={card.title} id={card.id} key={card.id} onOpen={onOpen}/>
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        alignItems : "center",
        flexDirection : "row",
        flexWrap : "wrap",
        gap : 20,
        margin : 5,
        justifyContent : "center",
        marginTop : 20
    },
    background : {
        width : "100%",
        height : "100%"
    }
})