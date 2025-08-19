import { useEffect, useState } from "react"
import { Sun , Moon } from "lucide-react"
import { cn } from "../lib/utilis"

export const ThemeToggle = ()=>{
    const [isDarkmode, setisDarkmode] = useState(false)

    useEffect (()=>{
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setisDarkmode(true)
            document.documentElement.classList.add("dark")
        } else {
            setisDarkmode(false)
            document.documentElement.classList.remove("dark")
        }
    },[])
    const toggletheme = ()=>{
        if (isDarkmode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme" , "light")
                setisDarkmode(false)
        } else {
            document.documentElement.classList.add("dark")
                setisDarkmode(true)
                localStorage.setItem("theme" , "dark")
        }
    }
    return(
        <button onClick={toggletheme} className={cn("fixed max-sm:hidden top-5 right-5 p-2 z-50 rounded-full transition-colors duration-300 ", "focus:outline-hidden")}> {" "} {isDarkmode ? <Sun className="h-6 w-6 text-yellow-300" />: 
        <Moon className="h-6 w-6 text-blue-300" />} </button>
    )
}