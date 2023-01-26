import { FooterContainer } from "./styles";


export function Footer(){   
        const today = new Date()
        const year = today.getFullYear()   

    return(
        <FooterContainer>
        <span>copyright © annakarlla, {year}. All Rights Reserved / desenvolvido por 
            <a href="https://www.instagram.com/luisalbertosc/"> luiscorreiadev</a></span>
        </FooterContainer>
    )
}