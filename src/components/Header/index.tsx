import {useState} from "react"
import { Brain, Heartbeat, Syringe, Pill } from "phosphor-react";
import { Divider, Footer, HeaderContainer, IconsContainer, InfoHeaderContainer, MainContainer } from "./styles";
import drImage from "../../assets/drimage.png";
import {ImageSlider} from "./components/ImageSlider";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";

const images = [
{url: 'src/assets/bgimage.jpg'},
{url: 'src/assets/bgimage2.jpg'},
{url: 'src/assets/bgimage3.jpg'}
]


export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
  
    return (
        <>
            <HeaderContainer id="home">
                <div className="containerStyles">
                    <ImageSlider images={images}/> 
                </div>
                <Navbar toggle={toggle}/>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Divider>
                    <div className="divider"></div>
                </Divider>
                <MainContainer>
                    <InfoHeaderContainer>
                        <div>
                            <span>Nutróloga</span>
                            <h1>Dra. Anna Karlla</h1>
                            <p>Vem fazer parte do nosso Programa de Emagrecimento</p>
                        </div>
                        <IconsContainer>
                            <div className="icon"><Heartbeat size={26} weight="fill" /></div>
                            <div className="icon"><Pill size={26} weight="fill" /></div>
                            <div className="icon"><Syringe size={26} weight="fill" /></div>
                            <div className="icon"><Brain size={26} weight="fill" /></div>
                        </IconsContainer>
                        <Footer>
                            <p>Nutrologia é a especialidade médica clínica que se dedica ao diagnóstico,
                                prevenção e tratamento de doenças do comportamento alimentar.
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=5575981637324&text=Ol%C3%A1!%20Gostaria%20de%
                            20marcar%20uma%20consulta%20com%20a%20Dra%20Anna%20Karlla." target="_blank">
                                <button>Agende sua consulta</button>
                            </a>
                        </Footer>
                    </InfoHeaderContainer>
                    <div>
                        <img src={drImage} alt="" />
                    </div>
                </MainContainer>
            </HeaderContainer>
        </>
    )
}