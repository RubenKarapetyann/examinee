import { createStackNavigator } from "@react-navigation/stack"
import type { RootStackParamList } from "../types/navigation"
import Manu from "../screens/manu/Manu"
import Section_3 from "../screens/section_3/Section_3"

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
                    justifyContent : "center",
                    alignItems : "center"
                }
            }}/>
            <RootStack.Screen name="Section_3" component={Section_3}/>
        </RootStack.Navigator>
    )
}