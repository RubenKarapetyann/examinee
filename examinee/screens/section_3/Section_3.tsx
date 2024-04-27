import { Section_3Types } from "../../types/components";
import data from "../../data/section_3.json"
import GoToNextButton from "../../components/GoToNextButton";
import { SEC_3 } from "../../constants/sections";
import Choose from "../../components/Choose";
import useChoose from "../../hooks/useChoose";
import Banner from "../../ads/Banner";

export default function Section_3({ navigation, route }: Section_3Types){    
    const equipment = useChoose({data, section : SEC_3, mode : route.params.mode, navigation})
    if(!equipment){
        return
    }
    const {sectionData, currentExercise, answered, statsRef, onChoose, onGoToNext} = equipment
    return (
        <>
            <Choose
                exercise={currentExercise}  
                sectionData={sectionData}  
                mode={route.params.mode}
                stats={statsRef}
                answered={answered}
                onChoose={onChoose}
            />
            {answered && <GoToNextButton onGoToNext={onGoToNext}/>}
            <Banner/>
        </>
    )
} 
