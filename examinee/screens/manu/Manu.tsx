import { SECTIONS } from "../../constants/sections";
import CardsList from "../../components/CardsList";
import Dropdown from "../../components/Dropdown";
import { MODES } from "../../constants/modes";
import { useState } from "react";
import { ManuProps } from "../../types/components";
import { ModeType, SectionRoute } from "../../types/global";


export default function Manu({ route, navigation }: ManuProps){
    const [modeWindowOpen, setModeWindowOpen] = useState<false | SectionRoute>(false)

    const onClose = ()=> setModeWindowOpen(false)
    const onOpen = (route: SectionRoute)=> setModeWindowOpen(route)
    const onStart = (mode: ModeType)=> {
        if(modeWindowOpen){
            navigation.navigate(modeWindowOpen, {mode})
            setModeWindowOpen(false) 
        }
    }

    return (
        <>
            {modeWindowOpen && <Dropdown items={MODES} onClose={onClose} onStart={onStart}/>}
            <CardsList cards={SECTIONS} onOpen={onOpen}/>
        </>
    )
}