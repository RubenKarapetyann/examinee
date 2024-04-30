import { createStackNavigator } from "@react-navigation/stack"
import type { RootStackParamList } from "../types/navigation"
import Manu from "../screens/manu/Manu"
import Section_3 from "../screens/section_3/Section_3"
import Section_5 from "../screens/section_5/Section_5"
import Section_10 from "../screens/section_10/Section_10"
import Section_8 from "../screens/section_8/Section_8"
import Section_11 from "../screens/section_11/Section_11"

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootStackNavigation(){
    return (
        <RootStack.Navigator initialRouteName="Manu">
            <RootStack.Screen name="Manu" component={Manu} options={{ 
                title: 'SECTIONS',
                headerTitleAlign : "center",
                headerTitleStyle : {
                    fontSize : 50,
                    fontWeight : "bold",
                },
                headerStyle : {
                    height : 100,
                }
            }}/>
            <RootStack.Screen name="Section_3" component={Section_3} options={{
                title : "Section 3"
            }}/>
            <RootStack.Screen name="Section_5" component={Section_5} options={{
                title : "Section 5"
            }}/>
            <RootStack.Screen name="Section_8" component={Section_8} options={{
                title : "Section 8"
            }}/>
            <RootStack.Screen name="Section_10" component={Section_10} options={{
                title : "Section 10"
            }}/>
            <RootStack.Screen name="Section_11" component={Section_11} options={{
                title : "Section 11"
            }}/>
        </RootStack.Navigator>
    )
}