import {NavLink} from "react-router-dom";

export default function Navbar(){
    return (
         <nav className="sidebar">
            <ul>
                <li><NavLink to="/" className="sidebar-icons"><h1>Ee</h1></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/liked" className="sidebar-icons"><h1>Liked</h1></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/history" className="sidebar-icons"><h1>History</h1></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/playlist" className="sidebar-icons"><h1>Playlist</h1></NavLink></li>
            </ul>
        </nav>
    )
}