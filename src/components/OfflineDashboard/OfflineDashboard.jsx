import React from 'react';
import { Card } from '../Commons/Card';
import { H3 } from '../Commons/H3';
import { SectionFlex } from '../Commons/SectionFlex';
import { SectionGrid } from '../Commons/SectionGrid';
import { Title } from '../Commons/Title';
import { Footer } from '../Footer/Footer';
// import { ArtistInfo } from '../ArtistInfo/ArtistInfo';
// import { SongInfo } from '../SongInfo/SongInfo';
// import { GenreInfo } from '../GenreInfo/GenreInfo';
import { P } from '../Commons/P';
import {playlists} from '../JSON/playlist.json';
import {playlists2} from '../JSON/playlist-2.json';
import {playlists3} from '../JSON/playlist-3.json';
import { ArtistInfo } from '../ArtistInfo/ArtistInfo';

const playlist = playlists;
const playlist2 = playlists2;
const playlist3 = playlists3;
export const OfflineDashboard = () => {
	return (
		<>
			<SectionFlex variant direction="row" directionM="column" align="center" justify="center" padding="0 3.5rem" paddingM="1rem" gap="0">
				<Title>Playlist Generator</Title>
			</SectionFlex>
			<SectionFlex variant direction="column" align="center" justify="center" margin="1rem 0" paddingM="0 1rem">
				<H3>Te encuentras en modo offline</H3>
				<P>Te recomendamos revisar tu conexión a Internet o recarga la página.</P>
				<H3>Pero ¡hey! no te queremos dejar sin playlists, aquí te van unas recomendaciones:</H3>
			</SectionFlex>
			<SectionGrid variant>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Workout</H3>
					</SectionFlex>
					<SectionFlex direction="column" directionT="row" gap="1rem" wrapT="wrap">
						{
							playlist?.map( ({name, images, id, href}) => {
							
								return (
									<ArtistInfo key={id} id={id} name={name} images={images} href={href}></ArtistInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Party</H3>
					</SectionFlex>
					<SectionFlex direction="column" directionT="row" gap="1rem" wrapT="wrap">
						{
							playlist2?.map( ({name, images, id, href}) => {
							
								return (
									<ArtistInfo key={id} id={id} name={name} images={images} href={href}></ArtistInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Sad</H3>
					</SectionFlex>
					<SectionFlex direction="row" gap="1rem" wrap="wrap" wrapT="wrap">
						{
							playlist3?.map( ({name, images, id, href}) => {
							
								return (
									<ArtistInfo key={id} id={id} name={name} images={images} href={href}></ArtistInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
			</SectionGrid>
			<Footer/>
		</>
	);
};
