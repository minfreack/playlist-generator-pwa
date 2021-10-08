import React, { useState } from 'react';
import { ArtistCard } from '../Commons/ArtistCard';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import PropTypes from 'prop-types';
import './songinfo.css';

export const SongInfo = ({name, album, id, songsUser, setSongsUser}) => {

	const [isSelected, setIsSelected] = useState(false);
	const handleClick = () => {
		if(isSelected == false){
			setIsSelected(!isSelected);
			setSongsUser([...songsUser, id]);
		}else{
			setIsSelected(!isSelected);
			setSongsUser( (prevArtistUser) => {
				const copyArray = prevArtistUser.slice();
				copyArray.splice(copyArray.indexOf(id), 1);
				return copyArray;
			});
		}
	};

	return (
		<ArtistCard className={`${isSelected && 'active'}`} onClick={handleClick}>
			<SectionFlex direction="row" align="center" gap="1rem">
				<Img user src={album.images[0]?.url} width={40}></Img>
				<P>{name}</P>
			</SectionFlex>
		</ArtistCard>
	);
};

SongInfo.propTypes = {
	name: PropTypes.string,
	album: PropTypes.any,
	id: PropTypes.string,
	songsUser: PropTypes.any,
	setSongsUser: PropTypes.func
};
