import { StyleSheet, TouchableHighlight, View } from "react-native";
import { DropdownProps } from "../types/components";
import DropdownItem from "./DropdownItem";

export default function Dropdown({ items, onClose, onStart }: DropdownProps){
    return (
        <TouchableHighlight style={styles.background} onPress={onClose}>
            <View style={styles.container}>
                {items.map(item=>{
                    return <DropdownItem mode={item.mode} key={item.id} name={item.name} id={item.id} onStart={onStart}/>
                })}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    background : {
        backgroundColor : "rgba(0,0,0,0.5)",
        // opacity : 0.,
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
        padding : 5
    }
})