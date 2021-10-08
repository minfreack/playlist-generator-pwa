import styled from 'styled-components';

export const Button = styled.a`
border-radius: .5rem;
background-color: #23BC55;
color: #fff;
cursor: pointer;
text-decoration: none;
text-align: center;
padding: .5rem 1rem;
width: max-content;
height: max-content;
transition: .5s;
&:hover{
	background-color: #218F46;
	transition: .5s;
}
`;