import { createContext, useContext, useState } from "react"
import { ThemeType } from "../types/global"
import { SectionsProviderProps } from "../types/components"
import { ThemeContextType } from "../types/contexts"
import { DARK, LIGHT } from "../constants/styles"

const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: SectionsProviderProps){
    const [theme, setTheme] = useState<ThemeType>("light")

    const changeTheme = ()=> setTheme(theme=>theme === DARK ? LIGHT : DARK)

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext)