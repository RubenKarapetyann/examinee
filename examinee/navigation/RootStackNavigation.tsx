import { createStackNavigator } from "@react-navigation/stack"
import type { RootStackParamList } from "../types/navigation"
import Manu from "../screens/manu/Manu"
import Section_3 from "../screens/section_3/Section_3"
import Section_5 from "../screens/section_5/Section_5"

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
        </RootStack.Navigator>
    )
}