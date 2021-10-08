import styled from 'styled-components';

export const P = styled.p`
font-size: ${props => props.variant ? '.75rem' : props => props.variantF ? '.75rem' : '1rem'};
@media screen and (max-width: 1023.9px){
	font-size: .75rem;
	padding-bottom: ${props => props.variantF && '1rem'};
}
`;