import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { useEffect, useState } from "react";
import { SaveButtonProps } from "../types/components";
import { ChooseExerciseType, SentenceExerciseType } from "../types/global";
import { useSaves } from "../contexts/SavesProvider";

export default function SaveButton<ExT extends ChooseExerciseType | SentenceExerciseType>({ exercise, section }: SaveButtonProps<ExT>){
    const savesContext = useSaves()
    if(!savesContext){
        return
    }

    const { saves, changeSaves } = savesContext
    const [isCurrentInSaves, setIsCurrentInSaves] = useState<boolean>(false)
    
    useEffect(()=>{    
        const setCurrent = ()=>{
            for(let i in saves){
                if(saves[i].id === exercise?.id && saves[i].section === section){    
                    setIsCurrentInSaves(true)
                    return
                }
            }
            setIsCurrentInSaves(false)
        }
        setCurrent()
    },[exercise])

    const pressHandle = ()=>{
        if(exercise){
            changeSaves(exercise, section, isCurrentInSaves)
            setIsCurrentInSaves(current=>!current)
        }
    }

    return (
        <View style={styles.container}>
            <Button 
                icon={isCurrentInSaves ? "bookmark" : "bookmark-o"} 
                handle={pressHandle}
                width={40}
                height={40}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : 100,
        height : 50,
        justifyContent : "center",
        alignItems : "center"
    }
})