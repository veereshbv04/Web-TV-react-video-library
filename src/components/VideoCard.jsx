
export default function VideoCard({videodata}){
    const {thumbnail, logo, title, creator, views} = videodata

    return (
        <div className="video-card">
            <img src={thumbnail} />
                <div className="video-details">
                    <img src={logo}/>
                    <div className="video-texts">
                        <h3 className="video-title">{title}</h3>
                        <p>{creator}</p>
                        <p>{views}</p>
                    </div>
                </div>
        </div>
    )
}