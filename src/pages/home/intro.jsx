// import bgvid from '/assets/videos/bgpubg.mp4'
import { useEffect, useRef } from "react";
import '../home/intro.css'
function Intro({ handleClick }) {
    const videoRef = useRef(null);
    
    const bgvid = "https://res.cloudinary.com/dytabx6xe/video/upload/v1767623990/entergif_pg7qjl.mp4"
    useEffect(() => {
        const video = videoRef.current;


        const setRate = () => {
            video.playbackRate = 0.25;
        };

        video.addEventListener("loadedmetadata", setRate);
        return () => video.removeEventListener("loadedmetadata", setRate);
    }, []);
    return (
        <>
            <div className='maincont relative'>
                <div >
                    <video ref={videoRef} autoPlay loop muted src={bgvid} playbackRate="0.5"></video>
                    <div class="intro-button button" id="intro-btn" onClick={handleClick}>
                        <div class="border">
                            <div class="left-plane"></div>
                            <div class="right-plane"></div>
                        </div>
                        <div class="text">Enter</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Intro;