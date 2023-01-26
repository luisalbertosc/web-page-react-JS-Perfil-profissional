import { Brain, Heartbeat, Syringe, Pill, Flower } from "phosphor-react";
import { Divider, IconsContainer, SkillsContainer } from "./styles";


export function Skills(){
    return(
        <>
        <SkillsContainer id="habilidades">
        <h3>As habilidades que você precisa para mudar sua vida</h3>
        <p>Sua saúde sempre em primeiro lugar.</p>

        <Divider>
        <div className="divider"></div>
        <p><Flower size={16} weight="thin" /></p>
        <div className="divider"></div>
        </Divider>

        <IconsContainer>
        <div className="iconcontainer">        
            <div className="icon"><Heartbeat size={18} weight="fill" /></div>
            <strong>Tratamento de obesidade</strong>
            <span>O Programa de Aceleração do Emagrecimento encurta os caminhos para alcançar o corpo que deseja</span>
        </div>
        <div className="iconcontainer"> 
            <div className="icon"><Pill size={18} weight="fill" /></div>
            <strong>Ganho de massa muscular</strong>
            <span>Temos o tratamento ideal para pessoas com foco em hipertrofia muscular e desempenho esportivo</span>
        </div>
        <div className="iconcontainer">
            <div className="icon"><Brain size={18} weight="fill" /></div>
            <strong>Deficiências nutricionais</strong>
            <span>Tratamos todas as formas de deficiências e intolerâncias de cunho alimentar</span>
        </div>
        <div className="iconcontainer">
            <div className="icon"><Syringe size={18} weight="fill" /></div>
            <strong>Implantes hormonais</strong>
            <span>Disponibilizamos todas as técnicas necessárias para alcançar os melhores resultados</span>
        </div>
        </IconsContainer>
        </SkillsContainer>
        </>
    )
}