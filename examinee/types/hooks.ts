import { StackNavigationProp } from "@react-navigation/stack"
import { ChooseExerciseType, ModeType } from "./global"
import { RootStackParamList } from "./navigation"

export type useChooseProps = {
    data: ChooseExerciseType[],
    section: string,
    mode: ModeType,
    navigation : StackNavigationProp<RootStackParamList, "Section_3" | "Section_5", undefined>
}