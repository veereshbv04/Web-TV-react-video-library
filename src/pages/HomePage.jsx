import axios from "axios"
import {useEffect} from "react"
import { CategoryBar } from "../components"
export default function HomePage(){

    useEffect(()=>{
        console.log("videos")
        const fetchVideos = async ()=>{
            const response = axios.get("/apid/videos");
            if(response.status === 200){
                const videos = response.data.videos
                console.log(videos)
            }else{
                console.log("in homepage status not 200")
            }
        }
    }, [])

    return (
        <div className="main-div">
        <div className="main-content">
            <CategoryBar/>
            <div className="video-listing">

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/TUVcZfQe-Kw/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/60ItHLz5WEA/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/qikxEIxsXco/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/FLmBqI3IKMA/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/JoL5ukBTwcY/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/JoL5ukBTwcY/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

                <div className="video-card">
                    <img src="https://i.ytimg.com/vi/JoL5ukBTwcY/mqdefault.jpg" />
                    <div className="video-details">
                        <img
                            src="https://yt3.ggpht.com/ytc/AKedOLQFII48R0atMndxGz1n5quE7W1VIpMvJxNnGlUYFg=s68-c-k-c0x00ffffff-no-rj" />
                        <div className="video-texts">
                            <h3 className="video-title">Learn JavaScript today fewfregvrsrdgrsgfdg</h3>
                            <p>JavaScript.io</p>
                            <p>36K views</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
    )
}