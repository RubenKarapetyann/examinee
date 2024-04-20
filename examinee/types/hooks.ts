import { StackNavigationProp } from "@react-navigation/stack"
import { ChooseExerciseType, ModeType, SectionNames } from "./global"
import { RootStackParamList } from "./navigation"

export type useChooseProps = {
    data: ChooseExerciseType[],
    section: SectionNames,
    mode: ModeType,
    navigation : StackNavigationProp<RootStackParamList, "Section_3" | "Section_5", undefined>
}