import { Books, Flower, Star, Student } from "phosphor-react";
import { Divider, EducationSectionContainer, IconsContainer } from "./styles";


export default function EducationSection(){
    return(
        <>
        <EducationSectionContainer id="trajetória">
            <h3>Nossa trajetória</h3>
            <p>Uma vida dedicada à sua saúde</p>

            <Divider>
                <div className="divider"></div>
                <p><Flower size={16} weight="thin" /></p>
                <div className="divider"></div>
            </Divider>

            <IconsContainer>
        <div className="iconcontainer">        
            <div className="icon"><Student size={18} weight="fill" /></div>
            <strong>Médica desde 2013</strong>
            <span>Graduada em medicina pela Universidade Estadual de Feira de Santana, Bahia (UEFS)</span>
            <p>CRM 25918</p>
        </div>
        <div className="iconcontainer"> 
            <div className="icon"><Books size={18} weight="fill" /></div>
            <strong>Nutrologia</strong>
            <span>Atua no campo da nutrologia desde o ano de 2021, seja presencial ou virtualmente (telemedicina)</span>
            <p>Experiência</p>
        </div>
        <div className="iconcontainer">
            <div className="icon"><Star size={18} weight="fill" /></div>
            <strong>Especialização</strong>
            <span>Estamos em constante evolução não apenas em Nutrologia mas também em Oftalmologia</span>
            <p>Evolução</p>
        </div>
        </IconsContainer>

        </EducationSectionContainer>
        </>
    )
}