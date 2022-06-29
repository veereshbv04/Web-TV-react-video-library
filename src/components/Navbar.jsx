import {NavLink} from "react-router-dom";
import {MdExplore, MdThumbUpAlt, MdHistory, MdPlaylistPlay, MdWatchLater} from "react-icons/md";

export default function Navbar(){
    return (
         <nav className="sidebar">
           
            <ul>
                <li><NavLink to="/" className="sidebar-icons"><MdExplore className="icons"/></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/" className="sidebar-icons"><MdThumbUpAlt className="icons"/></NavLink></li>
            </ul>
            
            <ul>
                <li><NavLink to="/history" className="sidebar-icons"><MdHistory className="icons"/></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/playlist" className="sidebar-icons"><MdPlaylistPlay className="icons"/></NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/playlist" className="sidebar-icons"><MdWatchLater className="icons"/></NavLink></li>
            </ul>

        </nav>
    )
}