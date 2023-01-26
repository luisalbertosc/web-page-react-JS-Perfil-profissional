import { Play } from "phosphor-react";
import { VideosList, VideosSectionContainer, VideoTitle } from "./styles";




export function VideosSection(){
    return(
        <>
        <VideosSectionContainer id="trajetoria">
            <VideoTitle>
                <h1>Como cuidar melhor do seu corpo</h1>
                <Play size={16} weight="fill" />
                <div className="divider"></div>
            </VideoTitle>
            <VideosList>
            <iframe width="300" height="230" src="https://www.youtube.com/embed/viBq-8KrkXE" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen frameBorder = "0">
            </iframe>
            <iframe width="300" height="230" src="https://www.youtube.com/embed/UnLAP5vMx8A" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen frameBorder = "0">
            </iframe>
            <iframe width="300" height="230" src="https://www.youtube.com/embed/PcutrfzkA2c" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen frameBorder = "0">
            </iframe>
            <iframe width="300" height="230" src="https://www.youtube.com/embed/ei1sQlM_kiQ" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen frameBorder = "0">
            </iframe>
            </VideosList>
        </VideosSectionContainer>
        </>
    )
}