import ContacSection from "../../components/ContactSection";
import EducationSection from "../../components/EducationSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {Phrase} from "../../components/Phrase";
import { Skills } from "../../components/Skills";
import {VideosSection} from "../../components/VideosSection/indext";
import { WrapperContainer } from "./styles";


export function Landing(){
    return(
        <>
        <WrapperContainer>
            <Header/>
            <Skills/>
            <Phrase/>
            <VideosSection/>
            <EducationSection/>
            <ContacSection/>
            <Footer/>
        </WrapperContainer>
        </>
    )
}