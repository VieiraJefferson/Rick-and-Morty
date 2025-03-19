import styled from "styled-components";

export const HomePageContainer =styled.div`
    display: flex;
    width: 100%;
    flex-direction: row; /* Padrão: aside à esquerda, main à direita */


    @media (max-width: 768px) {
    flex-direction: column; /* Em telas menores, muda para coluna */
  }

main{
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem ;
    order: 2;
}

aside{
    display:flex;
    flex-direction: column;
    justify-content: flex-start; /* Alinhar no topo */
    min-width: 30%;
    align-items: center;
    margin-top: 1rem;
    gap: 5px;
    padding: 0px;
    order: 1; /* Padrão: aside vem antes do main */
    @media (max-width: 768px) {
      order: 1; /* Em telas menores, aside vem primeiro */
      margin-top: 5vh;
    }
}

form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:70%;
    width:40vw;
    margin-right: 0;
    button{
        margin-top: 5px;
        padding: 5px;
        border-radius: 5px;
        background-color:rgb(158, 57, 57);
        cursor: pointer;
        color: white;
        height: 25px;
    }
    input{
        border-radius: 5px;
        height: 25px;
    }
    select{
        border-radius: 5px;
        height: 25px;
    }
    label{
        height: 25px;
    }
}


`