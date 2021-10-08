import React, { useState } from 'react';
import { ArtistCard } from '../Commons/ArtistCard';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import PropTypes from 'prop-types';
import './artistinfo.css';
import { Offline, Online } from 'react-detect-offline';
import { A } from '../Commons/A';

export const ArtistInfo = ({name, images, id, artistUser, setArtistUser, href=''}) => {

	const [isSelected, setIsSelected] = useState(false);
	const handleClick = () => {
		if(isSelected == false){
			setIsSelected(!isSelected);
			setArtistUser([...artistUser, id]);
		}else{
			setIsSelected(!isSelected);
			setArtistUser( (prevArtistUser) => {
				const copyArray = prevArtistUser.slice();
				copyArray.splice(copyArray.indexOf(id), 1);
				return copyArray;
			});
		}
	};

	return (
		<>
			<Online>
				<ArtistCard className={`${isSelected && 'active'}`} onClick={handleClick}>
					<SectionFlex direction="row" align="center" gap="1rem">
						<Img user src={images[0]?.url}  width={40}></Img>
						<P>{name}</P>
					</SectionFlex>
				</ArtistCard>
			</Online>
			<Offline>
				<ArtistCard className={`${isSelected && 'active'}`}>
					<A href={href} target="_blank">
						<SectionFlex direction="row" align="center" gap="1rem">
							<Img user src={images[0]?.url}  width={40}></Img>
							<P>{name}</P>
						</SectionFlex>			
					</A>
				</ArtistCard>
			</Offline>
		</>
	);
};

ArtistInfo.propTypes = {
	name: PropTypes.string,
	images: PropTypes.array,
	id: PropTypes.string,
	artistUser: PropTypes.any,
	setArtistUser: PropTypes.func,
	href: PropTypes.string
};
