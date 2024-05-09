import { StyleSheet, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/components";
import Icon from "react-native-vector-icons/FontAwesome"

export default function Button({ icon, handle, width, height }: ButtonProps){
    return  (
        <TouchableOpacity style={[styles.container, {
            width, height
        }]} onPress={handle}>
            <Icon name={icon} size={width/1.4} color={"black"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor : "white",
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 15
    }
})