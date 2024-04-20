import { SECTIONS } from "../../constants/sections";
import CardsList from "../../components/CardsList";
import Dropdown from "../../components/Dropdown";
import { MODES } from "../../constants/modes";
import { useEffect, useState } from "react";
import { ManuProps } from "../../types/components";
import { ModeType, SectionRoute } from "../../types/global";
import { getItems } from "../../utils/storage";
import { useSections } from "../../contexts/SectionsProvider";


export default function Manu({ route, navigation }: ManuProps){
    const [modeWindowOpen, setModeWindowOpen] = useState<false | SectionRoute>(false)
    const sectionsContext = useSections()
    if(sectionsContext === null){
        return
    }
    const { sectionsData: sections, placeSectionsData } = sectionsContext
    
    
    useEffect(()=>{                
        const getSectionsInfo = async ()=>{            
            const sectionsInfo = await getItems()   
                     
            if(sectionsInfo){                
                placeSectionsData(sectionsInfo)
            }
        }
        getSectionsInfo()

        // navigation.addListener("focus", getSectionsInfo)
        // return ()=> {
        //     navigation.removeListener("focus", getSectionsInfo)
        // }
    }, [])

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
            <CardsList cards={SECTIONS} onOpen={onOpen} sections={sections}/>
        </>
    )
}