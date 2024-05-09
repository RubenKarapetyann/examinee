import { DARK } from "../constants/styles";
import { useTheme } from "../contexts/ThemeProvider";
import Button from "./Button";

export default function ThemeButton(){
    const themeContext = useTheme()
    if(!themeContext){
        return
    }
    const { theme, changeTheme } = themeContext

    return (
        <>
            <Button
                width={50}
                height={50}
                icon={theme === DARK ? "sunny" : "sunny-outline"}
                handle={changeTheme}
            />
        </>
    )
}