import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { InputText } from '../Commons/InputText';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import search from '../Images/search.svg';
import PropTypes from 'prop-types';

const InputIcon =styled.img`
position: absolute;
top: 1.4rem;
right: 2rem;
`;

const InputContainer = styled.div`
position: relative;
`;

export const Search = ({token, setArtist, setSongs}) => {

	const [searchValue, setSearchValue] = useState('');

	const handleInputValue = (e) => {
		e.preventDefault();
		setSearchValue(e.target.value);
	};

	const handleEnter = (e) => {
		if (e.key == 'Enter'){
			handleSearch();
		}
	};

	const handleSearch = () => {
		axios.get(`https://api.spotify.com/v1/search?q=${searchValue}&type=track&limit=20`,{
			headers: {
				Authorization: 'Bearer ' + token
			}
		}).then(res => {
			setSongs(res.data.tracks.items);
		});
		axios.get(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist&limit=20`,{
			headers: {
				Authorization: 'Bearer ' + token
			}
		}).then(res => {
			setArtist(res.data.artists.items);
		});
	};

	return (
		<SectionFlex variant direction="column" align="center" justify="center" margin="1rem 0" paddingM="0 1rem">
			<P>Selecciona por lo menos 1 artista, 1 canción y un género. ¡Esto nos ayudará a darnos una idea de qué es lo que te gusta!</P>
			<InputContainer>
				<InputIcon src={search} width={30} onClick={handleSearch}/>
				<InputText onChange={handleInputValue} onKeyDown={handleEnter} placeholder="Escríbe un artista o canción..." width='45rem' widthM="17rem" widthT="30rem" value={searchValue}/>
			</InputContainer>
		</SectionFlex>
	);
};

Search.propTypes = {
	token : PropTypes.string,
	setArtist: PropTypes.any,
	setSongs: PropTypes.any
};