import { createStackNavigator } from "@react-navigation/stack"
import type { RootStackParamList } from "../types/navigation"
import Manu from "../screens/manu/Manu"
import Section_3 from "../screens/section_3/Section_3"

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootStackNavigation(){
    return (
        <RootStack.Navigator initialRouteName="Manu">
            <RootStack.Screen name="Manu" component={Manu}/>
            <RootStack.Screen name="Section_3" component={Section_3}/>
        </RootStack.Navigator>
    )
}