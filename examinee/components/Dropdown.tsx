import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { DropdownProps } from "../types/components";
import DropdownItem from "./DropdownItem";

export default function Dropdown({ items, onClose, onStart }: DropdownProps){
    return (
        <TouchableOpacity style={styles.background} onPress={onClose}>
            <Text style={styles.title}>CHOOSE MODE</Text>
            <View style={styles.container}>
                {items.map(item=>{
                    return <DropdownItem mode={item.mode} key={item.id} name={item.name} id={item.id} onStart={onStart}/>
                })}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    background : {
        backgroundColor : "rgba(0,0,0,0.5)",
        height : "100%",
        width : "100%",
        position : "absolute",
        zIndex : 2,
        alignItems : "center",
        justifyContent : "center",
    },
    container : { 
        width : 250,
        height : "auto",
        backgroundColor : "white",
        padding : 5,
        borderRadius : 15
    },
    title : {
        color : "white",
        fontSize : 30,
        fontWeight : "bold"
    }
})