import { ThemeToggle } from "../components/Themetoggle"
import { StarBackground } from "../components/starbackground"
export const Home = ()=>{   
return(
    <>
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
    </div>
    </>
)
}