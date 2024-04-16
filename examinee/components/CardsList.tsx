import { ScrollView, StyleSheet, View } from "react-native";
import { CardsListProps } from "../types/components";
import Card from "./Card";

export default function CardsList({ cards, onOpen }: CardsListProps){
    return (
        <ScrollView>
            <View style={styles.container}>
                {cards.map(card=>{
                    return <Card route={card.route} title={card.title} id={card.id} key={card.id} onOpen={onOpen}/>
                })}
            </View>
        </ScrollView>
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
        justifyContent : "center"
    }
})