import { Quotes } from "phosphor-react";
import { PhraseContainer } from "./styles";



export function Phrase(){
    return(
        <>
        <PhraseContainer id="videos">
        <Quotes size={40} weight="fill" />
            <h1> "A Nutrologia é o ramo da medicina que se ocupa da nutrição em todos os seus aspectos, normais, patológicos, clínicos 
                e terapêuticos. Por definição, a Nutrologia é uma especialidade médica de caráter clínico que tem como função fazer 
                o diagnóstico, a prevenção e o tratamento das enfermidades nutroneurometabólicas."
            </h1>
        <span>Associação Brasileira de Nutrologia</span>
        </PhraseContainer>
        </>
    )
}