import { Section_10Types } from "../../types/components";
import Choose from "../../components/Choose";
import data from "../../data/section_10.json"
import useChoose from "../../hooks/useChoose";
import { ChooseExerciseType, SentenceExerciseType } from "../../types/global";
import { SEC_10 } from "../../constants/sections";
import GoToNextButton from "../../components/GoToNextButton";
import Banner from "../../ads/Banner";

export default function Section_10({ navigation, route }: Section_10Types){
    const equipment = useChoose<SentenceExerciseType>({data, section : SEC_10, mode : route.params.mode, navigation})
    if(!equipment){
        return
    }
    const {sectionData, currentExercise, answered, statsRef, onChoose, onGoToNext} = equipment
    const exercise: ChooseExerciseType = {
        ...currentExercise,
        variants : [{
            text: "There is odd word",
            id : "true",
            variant : "true"
        }, {
            text : "There is not odd word",
            id : "false",
            variant : "false"
        }]
    }
    return (
        <>
            <Choose
                exercise={exercise}  
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