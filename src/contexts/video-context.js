import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideoContext = createContext()

const VideoProvider = ({children})=>{

    const [allvideos, setAllVideos] = useState(["s"])
  
    useEffect(()=>{

        ( async function fetchVideos(){
            try{
                const response = await axios.get("/api/videos");
                if (response.status === 200) {
                    const videos = response.data.videos
                    console.log(" in video context")
                    console.log(videos)
                    setAllVideos(videos)
                }
            }catch(error){
                console.log(error)
            }
        })()

    }, [])

    return <VideoContext.Provider value={{allvideos}}>{children}</VideoContext.Provider>
}


const useVideo = ()=>{
    const context = useContext(VideoContext)
    if(!context){
        throw new Error("Video context must be used inside video provider")
    }else{
        return context
    }
}

export {VideoProvider, useVideo}