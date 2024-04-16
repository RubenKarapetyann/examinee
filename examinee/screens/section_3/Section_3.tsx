import { Text } from "react-native";
import { Section_3Types } from "../../types/components";

export default function Section_3({ navigation, route }: Section_3Types){
    return (
        <Text>{route.params.mode}</Text>
    )
}