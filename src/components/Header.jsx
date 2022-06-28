
export default function Header(){
    return (
        <div className="header">
        <a href="#"><div className="brand-name">Web Tv</div></a>
        <div className="searchbar"><input className="user-search" placeholder="Search here"/></div>
        <div className="header-cta">
            <img src="/stheme.jpg" alt="theme"/>
            <img src="/stheme.jpg" alt="user"/>
        </div>
    </div>
    )
}