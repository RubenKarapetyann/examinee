import { ScrollView, StyleSheet, View } from "react-native";
import { CardsListProps } from "../types/components";
import Card from "./Card";

export default function CardsList({ cards }: CardsListProps){
    return (
        <ScrollView>
            <View style={styles.container}>
                {cards.map(card=>{
                    return <Card title={card.title}/>
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