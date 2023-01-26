import styled from "styled-components";



export const VideosSectionContainer = styled.section`
margin-top: 4rem;
height: 20rem;
    @media (max-width: 768px) {
        margin-top: 2rem;
        height: 50rem;
    }
`

export const VideoTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
h1{
    font-size: 1rem;
}
.divider{
    width: 60%;
    border-bottom: 1px solid ${({theme})=> theme.colors["base-divider"]};
    margin-left: 1.2rem;
}
svg{
    margin-left: 0.5rem;
}
@media (max-width: 768px) {
    display: grid;
    .divider, svg{
        display: none;
    }    
  }
`

export const VideosList = styled.div`
margin-top: 4rem;
display: flex;
justify-content: center;
align-items: center;
gap: 1.5rem;

@media (max-width: 768px) {
margin-top: 2.5rem;
display: grid;
justify-content: center;
align-items: center;
gap: 2rem;
iframe{
    width: 250px;
    height: 180px;
}
  }
`