import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  .cover{
    width: 15%;
    min-height: 75px;
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
`;
