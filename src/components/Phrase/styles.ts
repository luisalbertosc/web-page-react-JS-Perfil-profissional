import styled from "styled-components";


export const PhraseContainer = styled.section`
margin-top: 5rem;
display: flex;
flex-direction: column;
padding: 2rem;
justify-content: center;
align-items: center;
background-image: linear-gradient(rgb(255, 105, 180, 0.8), rgba(255, 105, 180, 0.7)), url("src/assets/phraseimage.jpg");
background-size: cover;
height: 20rem;
color: ${({theme})=> theme.colors["base-white"]};

h1{
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    width: 60%;
    margin-top: 1rem;
}

span{
    font-size: 0.75rem;
    margin-top: 1rem;
}
@media (max-width: 768px) {
    height: 28rem;
    padding: 1.6rem;
    background-position: center;

    h1{
        font-size: 1rem;
    }
    
  }
`