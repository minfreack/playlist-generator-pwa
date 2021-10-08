import styled from 'styled-components';

export const ArtistCard = styled.div`
background-color: #131313;
border-radius: .5rem;
padding: .5rem;
width: 22.5rem;
cursor: pointer;
@media screen and (min-width: 768px) and (max-width: 1023.9px){
	width: 20rem;
	
}
@media screen and (max-width: 767.9px){
	width: 17.5rem;
}
`;