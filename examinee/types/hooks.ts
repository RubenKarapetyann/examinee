import { StackNavigationProp } from "@react-navigation/stack"
import { ChooseExerciseType, ModeType, SectionInfoType, SectionNames, SectionRoute, SentenceExerciseType, StatsType } from "./global"
import { RootStackParamList } from "./navigation"

export type useChooseProps<ExT> = {
    data: ExT[],
    section: SectionNames,
    mode: ModeType,
    navigation : StackNavigationProp<RootStackParamList, SectionRoute, undefined>
}
export type useSaveProps = {
    mode: ModeType,
    section: SectionNames,
    sectionData: SectionInfoType,
    navigation: StackNavigationProp<RootStackParamList, SectionRoute, undefined>
}
export type useAdsProps<ExT> = {
    currentExercise : ExT
    statsRef : StatsType
}