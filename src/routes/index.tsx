import { Routes, Route } from "react-router-dom"
import { PageHome, Page2, PageLayout } from "../pages/index.ts"

export function Rout(){
    return(
        <Routes>
            <Route path="/" element={<PageLayout/>}>
                <Route path="" element={<PageHome/>}/>
                <Route path="texts" element={<Page2/>} />
            </Route>
        </Routes>
    )    
}