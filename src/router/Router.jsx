import { Route, Routes } from "react-router-dom";
import { HomePage, NotFound, Login, SignUp, History } from "../pages";

export default function Router(){
    return (
        <Routes>

            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/history" element={<History/>} />

        </Routes>
    )
}