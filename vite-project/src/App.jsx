import { Route, Routes } from "react-router-dom"
import Games from "./pages/Games"
import Navbar from "./Components/Navbar"
import Membership from "./pages/Membership"
import Member from "./pages/Member"
import AddGame from "./pages/AddGame"
import EditGame from "./pages/EditGame"

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Games />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/members" element={<Member />} />
                <Route path="/addgame" element={<AddGame />} />
                <Route path="/editgame/:id" element={<EditGame />} />

            </Routes>
        </>
    )
}



export default App