// import styled from "styled-components";

// export const Container =styled.div`
//     display:flex;
//     justify-content:space-evenly;
//     align-items:center;
//     flex-direction: column;
//     width:50%;
//     height: 80%;
//     text-align: center;
//     margin:auto;
    


//     button{
//         justify-self:flex-end;
//         max-width:40%;

//     }


//     img{
//         max-width:40%;
        
//     }
// `  
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      font-size: 0.9rem;
      padding: 8px 16px;
    }

    img {
      max-width: 80%;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.8rem;
      padding: 6px 12px;
    }

    img {
      max-width: 100%;
    }
  }
`;