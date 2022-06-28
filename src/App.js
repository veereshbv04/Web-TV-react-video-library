import "./App.css";
import { useEffect } from "react";
import Router from "./router/Router"
import {Header, Navbar} from "./components/index"

function App() {
   useEffect(() => {
     console.log("videos")
     const fetchVideos = async () => {
       const response = axios.get("/apid/videos");
       if (response.status === 200) {
         const videos = response.data.videos
         console.log(videos)
       } else {
         console.log("in homepage status not 200")
       }
     }
   }, [])
  return (
    <div className="dark">
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;
