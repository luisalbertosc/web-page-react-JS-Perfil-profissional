import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react"
import { ImageSliderContainer } from "./styles";

interface ImageSliderProps {
    images: [
        {url: string}
    ]
}


export  function ImageSlider({ images }:ImageSliderProps){
    const [currentIndex, setCurrentIndex] = useState(0);

    const arrayImages = images
    function showPrevious(){
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(currentIndex + 2)
        }
    }

    function showNext(){
        if(currentIndex <= 1) {
            setCurrentIndex(currentIndex + 1)
        } else{
            setCurrentIndex(currentIndex - 2)
        }
    }

    // useEffect(() => {
    // setInterval(() => showNext(), 10000)
    // }, [showNext]);

    const slideStyles ={
        width: "100%",
        height: "45rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: ` linear-gradient(rgba(0, 11, 40, 0.8), rgba(0, 11, 40, 0.7)), url(${arrayImages[currentIndex].url})`,
    }
    return ( 
        <>
       <ImageSliderContainer>
       <div style={slideStyles}>
        <button onClick={showPrevious} className="leftBtn"><CaretLeft size={48} weight="light" /></button>
        <button onClick={showNext} className="rightBtn"><CaretRight size={48} weight="light" /></button>
       </div>
       </ImageSliderContainer>
       </>
        
    )
}