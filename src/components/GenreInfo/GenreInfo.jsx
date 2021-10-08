import React, { useState } from 'react';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import PropTypes from 'prop-types';
import { GenreCard } from '../Commons/GenreCard';
import './genreinfo.css';

export const GenreInfo= ({genre, genresUser, setGenresUser}) => {

	const [isSelected, setIsSelected] = useState(false);
	const handleClick = () => {
		if(isSelected == false){
			setIsSelected(!isSelected);
			setGenresUser([...genresUser, genre]);
		}else{
			setIsSelected(!isSelected);
			setGenresUser( (prevArtistUser) => {
				const copyArray = prevArtistUser.slice();
				copyArray.splice(copyArray.indexOf(genre), 1);
				return copyArray;
			});
		}
	};

	return (
		<GenreCard className={`${isSelected && 'active'}`} onClick={handleClick}>
			<SectionFlex direction="row" align="center">
				<P>{genre}</P>
			</SectionFlex>
		</GenreCard>
	);
};

GenreInfo.propTypes = {
	genre: PropTypes.string,
	genresUser: PropTypes.any,
	setGenresUser: PropTypes.func
};
