import { AddressBook, At, InstagramLogo, MapPin, WhatsappLogo, YoutubeLogo } from "phosphor-react";
import { ContactCard, ContactSectionContainer, ListMedias } from "./styles";



export default function ContacSection(){
    return(
        <>
        <ContactSectionContainer id="contatos">
            <ContactCard>
                <MapPin size={26} weight="fill" />
                <h3>Onde nos encontrar</h3>
                <span>Avenida João Durval Carneiro, 3665, São João, Ed. Mutiplace, Sala 1014</span>
                <strong>Feira de Santana/BA</strong>
                <p>CEP - 440051-900</p>
            </ContactCard>
            <ContactCard>
                <AddressBook size={26} weight="fill" />
                <h3>Nossos contatos</h3>
                <div className="contact">
                    <div>
                        <a href="https://api.whatsapp.com/send?phone=5575981637324&text=Ol%C3%A1!%20Gostaria%20de%
                            20marcar%20uma%20consulta%20com%20a%20Dra%20Anna%20Karlla." target="_blank">
                        <WhatsappLogo size={20} weight="fill" />
                        </a>
                        <h4>71 99997-2252</h4>
                    </div>
                    <div>
                        <At size={20} weight="fill" />
                        <h4>annakarllasc@gmail.com</h4>
                    </div>
                    <p>Não hesite em mandar sua dúvida!</p>
                </div>
            </ContactCard>
            <ListMedias>
                <h3>Segue a gente nas redes sociais</h3>
                <ul>
                <li>
                    <a href="https://www.instagram.com/draannakarllanutrologia/" target="_blank">
                        <InstagramLogo size={48} weight="fill" />
                    </a>
                </li>
                <li>
                <a href="https://www.youtube.com/@draannakarllacorreianutrol69" target="_blank">
                    <YoutubeLogo size={48} weight="fill" />
                </a>
                </li>
                </ul>
            </ListMedias>
            
        </ContactSectionContainer>
        </>
    )
}