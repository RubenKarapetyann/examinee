import useChoose from "../../hooks/useChoose";
import { Section_5Types } from "../../types/components";
import data from "../../data/section_5.json"
import { SEC_5 } from "../../constants/sections";
import Choose from "../../components/Choose";
import GoToNextButton from "../../components/GoToNextButton";

export default function Section_5({ navigation, route }: Section_5Types){
    const equipment = useChoose({data, section : SEC_5, mode : route.params.mode, navigation})
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
        </>
    )
}