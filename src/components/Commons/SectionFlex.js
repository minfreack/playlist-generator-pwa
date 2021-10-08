import styled from 'styled-components';

export const SectionFlex = styled.div`
display: flex;
flex-direction: ${props => props.direction};
justify-content: ${props => props.justify};
flex-wrap: ${props => props.wrap};
align-items: ${props => props.align};
margin: ${props => props.margin};
padding: ${props => props.padding};
gap: ${props => props.gap};

@media screen and (min-width: 768px) and (max-width: 1023.9px){
	display: flex;
	flex-direction: ${props => props.directionT};
	padding: ${props => props.paddingM};
	flex-wrap: ${props => props.wrapT};
}
@media screen and (max-width: 767.9px){
	display: flex;
	flex-direction: ${props => props.directionM};
	padding: ${props => props.paddingM};
	gap: ${props => props.gapM};
}
`;