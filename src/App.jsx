import { Route , Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Notfound } from "./pages/NotFound"
function App() {

  return (
    <>
        <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
        </Routes>
         </> 
         )
}

export default App
