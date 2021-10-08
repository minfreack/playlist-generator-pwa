import styled from 'styled-components';

export const Img = styled.img`
width: ${props => props.width};
height: auto;
justify-self: center;
border-radius: ${props => props.user && '2rem'};

@media screen and (max-width: 1023.9px){
	width: ${props => props.widthM};
}
`;