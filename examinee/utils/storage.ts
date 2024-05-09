import AsyncStorage from '@react-native-async-storage/async-storage';
import { SectionInfoType } from '../types/global';

export const setItem = async (section: string, data: SectionInfoType)=>{
    try {
        const sectionsInfo = await getItems()
        
        if(sectionsInfo){               
            await AsyncStorage.setItem("sections", JSON.stringify({
                ...sectionsInfo,
                [section] : data
            }))
        }else{
            await AsyncStorage.setItem("sections", JSON.stringify({
                [section] : data
            }))
        }
    } catch (e) {
        return false
    }
}

export const getItems = async ()=>{
    try {
        const value = await AsyncStorage.getItem("sections")
        if (value !== null) {
           return JSON.parse(value)
        }
        return null
    } catch (e) {
        return false
    }
}

export const setSavedItem = async (data: object[])=>{
    try { 
        await AsyncStorage.setItem("saved", JSON.stringify(data))
    }catch(err){
        return false
    }
}

export const getSavedItems = async ()=>{
    try { 
        const value = await AsyncStorage.getItem("saved")
        if (value !== null) {
            return JSON.parse(value)
        }
        return null
    }catch(err){
        return false
    }
}