import { StackScreenProps } from "@react-navigation/stack"
import { CardItem, DropdownItem, ModeType, SectionRoute, Variant } from "./global"
import { RootStackParamList } from "./navigation"

export type CardProps = {
    title : string,
    id : string,
    route : SectionRoute,
    onOpen : (route: SectionRoute)=>void
}
export type CardsListProps = {
    cards : CardItem[],
    onOpen : (route: SectionRoute)=>void
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
 
export type VariantProps = {
    text : string,
    onChoose : (variant: string)=> void,
    variant: string,
    correctAnswer : string,
    answered: false | string
}

export type FormProps = {
    text : string,
    variants : Variant[],
    onChoose : (variant: string)=> void,
    correctAnswer : string,
    answered: false | string
}