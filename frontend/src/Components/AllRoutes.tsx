import {Routes,Route} from "react-router-dom"
import { Home } from "../Pages/Home"
import { ChatUI } from "../Pages/ChatGptUI"
import { Feedback } from "../Pages/Feedback"


export function AllRoutes() {
    

    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/chat' element={<ChatUI />}></Route>
            <Route path='/feedback' element={<Feedback />}></Route>
            <Route path='*' element={<h1>404 Error | Not Found Page</h1>}></Route>
        </Routes>
    )
}