
import { CategoryBar, VideoCard } from "../components"
import { useVideo } from "../contexts"
export default function HomePage(){
   const {allvideos} = useVideo()
   
    return (
        <div className="main-div">
            <div className="main-content">
                <CategoryBar/>
                <div className="video-listing">

                    {allvideos.map( video =>
                        <VideoCard videodata={video} key={video._id}/>
                     )}

                </div>
            </div>
        </div>
    )
}