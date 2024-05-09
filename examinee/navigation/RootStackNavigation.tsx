import { createStackNavigator } from "@react-navigation/stack"
import type { RootStackParamList } from "../types/navigation"
import Manu from "../screens/manu/Manu"
import Section_3 from "../screens/section_3/Section_3"
import Section_5 from "../screens/section_5/Section_5"
import Section_10 from "../screens/section_10/Section_10"
import Section_8 from "../screens/section_8/Section_8"
import Section_11 from "../screens/section_11/Section_11"
import Saved from "../screens/saved/Saved"
import Button from "../components/Button"
import { SAVED } from "../constants/navigation"
import SaveButton from "../components/SaveButton"
import { SEC_10, SEC_11, SEC_3, SEC_5, SEC_8 } from "../constants/sections"
import Icon from "react-native-vector-icons/FontAwesome"

const RootStack = createStackNavigator<RootStackParamList>()

export default function RootStackNavigation(){
    return (
        <RootStack.Navigator initialRouteName="Manu">
            <RootStack.Screen name="Manu" component={Manu} options={({ navigation })=>({ 
                title: 'SECTIONS',
                headerTitleStyle : {
                    fontSize : 40,
                    fontFamily : "NunitoSans_900Black",
                    marginLeft : 15
                },
                headerRightContainerStyle : {
                    padding : 30
                },
                headerStyle : {
                    height : 100,
                },
                headerRight : ()=> <Button 
                                        icon="bookmark" 
                                        handle={()=>{navigation.navigate(SAVED.name)}}
                                        width={55}
                                        height={55}
                                    />
            })}/>
            <RootStack.Screen name="Section_3" component={Section_3} options={({ navigation })=>({
                title : "Section 3",
                headerRight : ()=> SaveButton({ exercise : undefined, section : SEC_3 })
            })}/>
            <RootStack.Screen name="Section_5" component={Section_5} options={{
                title : "Section 5",
                headerRight : ()=> SaveButton({ exercise : undefined, section : SEC_5 })
            }}/>
            <RootStack.Screen name="Section_8" component={Section_8} options={{
                title : "Section 8",
                headerRight : ()=> SaveButton({ exercise : undefined, section : SEC_8 })
            }}/>
            <RootStack.Screen name="Section_10" component={Section_10} options={{
                title : "Section 10",
                headerRight : ()=> SaveButton({ exercise : undefined, section : SEC_10 })
            }}/>
            <RootStack.Screen name="Section_11" component={Section_11} options={{
                title : "Section 11",
                headerRight : ()=> SaveButton({ exercise : undefined, section : SEC_11 })
            }}/>
            <RootStack.Screen name="Saved" component={Saved} options={{
                title : SAVED.title,
                headerRight : ()=> <Icon name="bookmark" size={30} style={{marginRight : 30}}/>
            }}/>
        </RootStack.Navigator>
    )
}