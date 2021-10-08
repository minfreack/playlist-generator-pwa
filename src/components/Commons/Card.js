import styled from 'styled-components';

export const Card = styled.div`
background-color: #1B1C1E;
border-radius: .5rem;
padding: 1rem;
height: 25rem;
overflow: scroll;
overflow-x: hidden;
::-webkit-scrollbar{
	display: none;
}
-ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
`;