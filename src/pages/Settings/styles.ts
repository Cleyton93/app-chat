import styled from 'styled-components';

export const Container = styled.div`
  > div:first-child {
    display: flex;
    flex-direction: column;

    > h3 {
      margin-bottom: 20px;
    }

    > div {
      > input {
        margin-right: 10px; 
      }

      margin-bottom: 10px;
    }
  }
`;