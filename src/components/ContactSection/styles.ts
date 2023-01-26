import styled from "styled-components";


export const ContactSectionContainer = styled.section`
display: flex;
justify-content: center;
gap: 10rem;
background-image: linear-gradient(rgb(35, 35, 35, 0.9), rgba(35, 35, 35, 0.9)), url("src/assets/contactimage.jpg");
height: 20rem;
color: ${({theme})=> theme.colors["base-neige"]};
padding: 2rem;

@media (max-width: 768px) {
display: grid;
height: 45rem;
gap: 0;
background-image: linear-gradient(rgb(35, 35, 35, 0.6), rgba(35, 35, 35, 0.6)), url("src/assets/contactimage.jpg");
}
`

export const ContactCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 16rem;
width: 20rem;

h3, h4{
    margin-top: 0.75rem;
    font-size: 1rem;
}
span{
    width: 16rem;
    text-align: center;
    margin-top: 0.5rem;
}
strong{
    margin-top: 0.5rem;
}
.contact{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        svg{
            position: relative;
            top: 0.42rem;
        }
    }
}
.contact + p{
    margin-top: 0.5rem;
}
a:hover{
    color: ${({theme})=> theme.colors.whatsapp};
}
`

export const ListMedias = styled.div`
margin-top: 3rem;
h3, h4{
    font-size: 1rem;
}
ul{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 1rem;
}
a{
    transition: all 0.4s ease-in-out;
    &:hover{
        color: #fed05c;
    }
}
@media (max-width: 768px) {
    margin-top: 1rem;

h3{
text-align: center;}
}
ul{
    margin-top: 1rem;
    gap: 1rem;
}
`
