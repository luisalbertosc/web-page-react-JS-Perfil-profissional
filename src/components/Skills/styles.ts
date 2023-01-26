import styled from "styled-components";


export const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: -7rem;
height: 26rem;
p{
    font-size: 0.875rem;
    color: ${({theme})=> theme.colors["base-subtitle"]};
}
@media (max-width: 768px) {
    margin-top: -10rem;
    height: 50rem;

    h3{
        font-size: 1rem;
        text-align: center;
        width: 18rem;
    }
    p{
    font-size: 0.725rem;
    color: ${({theme})=> theme.colors["base-subtitle"]};
}
  }
`
export const Divider = styled.article`
display: flex;
gap: 0.3rem;
margin-top: 1.2rem;
p{
    position: relative;
    bottom: 0.55rem;
    color: gray;
}
.divider{
    width:5rem;
    border-top: 1px solid ${({theme})=> theme.colors["base-divider"]};
}
`
export const IconsContainer = styled.div`
display: flex;
justify-content: center;
gap: 5rem;
margin-top: 4rem;

.iconcontainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    strong{
        font-size: 0.875rem;
    }
    span{
        font-size: 0.75rem;
        color: ${({theme})=> theme.colors["base-subtitle"]};
        width: 14rem;
        text-align: center;
    }
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem; 
    height: 2.5rem; 
    background: ${({theme})=> theme.colors["base-blue"]}; 
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    color: ${({theme})=> theme.colors["base-white"]};
    border-radius: 8px;
    svg{
        transform: rotate(315deg);
    }
}
@media (max-width: 768px) {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
    .icon{
    width: 2rem; 
    height: 2rem; 
    }
  }
`