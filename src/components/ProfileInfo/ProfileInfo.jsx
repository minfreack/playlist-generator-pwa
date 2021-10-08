import React from 'react';
import { SectionFlex } from '../Commons/SectionFlex';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import profile from '../Images/robot.png';
import PropTypes from 'prop-types';
import { Offline, Online } from 'react-detect-offline';

export const ProfileInfo = ({username}) => {


	return (
		<>
			<Online>
				<SectionFlex direction="row" align="center" justify="center" gap="1rem">
					<Img user src={profile} width={60} widthM="50px"></Img>
					<P>¡Hola <br/>{username}!</P>
				</SectionFlex>
			</Online>
			<Offline>
				<SectionFlex direction="row" align="center" justify="center" gap="1rem">
					<Img user src={profile} width={60} widthM="50px"></Img>
					<P>¡Hola <br/>Usuario!</P>
				</SectionFlex>
			</Offline>
		</>
	);
};

ProfileInfo.propTypes = {
	username : PropTypes.string
};
