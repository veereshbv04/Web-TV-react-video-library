import {MdNightlight, MdWbSunny} from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai";

import { useTheme } from "../contexts";
import {Link} from "react-router-dom";

export default function Header(){
    const {theme, setTheme} = useTheme()

    return (
        <div className="header">
        <a href="#"><div className="brand-name"><img src={process.env.PUBLIC_URL + "assets/webtv.png"}/>Web Tv</div></a>
        <div className="searchbar"><input className="user-search" placeholder="Search here"/></div>
        <div className="header-cta">
           {theme==="dark"?<MdWbSunny onClick={()=>setTheme("light")} className="icons"/>:<MdNightlight onClick={()=>setTheme("dark")} className="icons"/>}
          
          <Link to="/login"><AiOutlineUser className="icons"/></Link>
            
           
        </div>
    </div>
    )
}