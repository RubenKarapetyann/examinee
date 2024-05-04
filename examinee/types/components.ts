import { StackScreenProps } from "@react-navigation/stack"
import { CardItem, ChooseExerciseType, DropdownItem, ModeType, SectionInfoType, SectionRoute, Variant, StatsType } from "./global"
import { RootStackParamList } from "./navigation"
import { ReactNode } from "react"

export type CardProps = {
    title : string,
    id : string,
    route : SectionRoute,
    onOpen : (route: SectionRoute)=>void,
    section : SectionInfoType | undefined,
    tasksCount : number
}
export type CardsListProps = {
    cards : CardItem[],
    onOpen : (route: SectionRoute)=>void,
    sections : Record<string, SectionInfoType>
}
export type DropdownProps = {
    items : DropdownItem[],
    onClose : ()=>void,
    onStart : (mode: ModeType) => void
}
export type DropdownItemProps = {
    name : string,
    id : string,
    onStart : (mode: ModeType) => void,
    mode : ModeType
}
export type ManuProps = StackScreenProps<RootStackParamList, "Manu">
export type Section_3Types = StackScreenProps<RootStackParamList, "Section_3">
export type Section_5Types = StackScreenProps<RootStackParamList, "Section_5">
export type Section_10Types = StackScreenProps<RootStackParamList, "Section_10">
export type Section_8Types = StackScreenProps<RootStackParamList, "Section_8">
export type Section_11Types = StackScreenProps<RootStackParamList, "Section_11">

export type VariantProps = {
    text : string,
    onChoose : (variant: string)=> void,
    variant: string,
    correctAnswer : string,
    answered: false | string
}
export type FormProps = {
    variants : Variant[],
    onChoose : (variant: string)=> void,
    correctAnswer : string,
    answered: false | string
}
export type LoadingBarProps = {
    max : number,
    reached : number
}
export type SectionsProviderProps = {
    children : ReactNode
}
export type ChooseProps = {
    exercise : ChooseExerciseType,
    sectionData : SectionInfoType,
    mode : ModeType,
    stats : StatsType,
    answered : false | string,
    onChoose : (variant: string)=> void
}
export type ButtonProps = {
    icon : string,
    handle : ()=> void
}