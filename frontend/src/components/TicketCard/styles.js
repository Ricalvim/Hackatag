import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #e3e3e3;
    -webkit-border-radius: 14px;
    -moz-border-radius: 14px;
    border-radius: 14px;
    display: flex;

    .cover{
      width: 15%;
      min-height: 150px;
      background-size: cover;
      background-position: center;
    }

    .description{
      width: 65%;
      padding: 15px 10px;
      h3{
        text-transform: uppercase;
      }
    }

    .tickets{
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
    }

    @media(max-width: 900px){
      flex-direction: column;
      .cover, .description, .tickets{
        width: 100%;
      }
    
      .tickets{
        button{
          width: 90%;
        }
      }
    }
`;
