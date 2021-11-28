import React from 'react';
import { Button } from '../Commons/Button';
import { H2 } from '../Commons/H2';
import { H3 } from '../Commons/H3';
import { Img } from '../Commons/Img';
import { SectionFlex } from '../Commons/SectionFlex';
import { SectionGrid } from '../Commons/SectionGrid';
import { Title } from '../Commons/Title';
import { Footer } from '../Footer/Footer';
import welcomeImg from '../Images/welcomeImg.png';

export const Welcome = () => {
	const CLIENT_ID = '2ab6dff6b53145db89da10d5f4e710ee';
	const AUTHORIZE = 'https://accounts.spotify.com/authorize';
	// const REDIRECT_URI = 'https://playlist-generator.vercel.app/generador';
	const REDIRECT_URI = 'http://localhost:3000/generador';
	const SCOPES = ['playlist-modify-public', 'playlist-modify-private', 'user-read-private', 'user-read-email'];
	const SCOPES_URL_PARAM = SCOPES.join('%20', );

	const URL = `${AUTHORIZE}?client_id=${CLIENT_ID}&redirect_uri=${encodeURI(REDIRECT_URI)}
	&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
	const requestAuthorization = () => {
		window.location.href = URL;
	};
	return (
		<>
			<Title>Playlist Generator</Title>
			<SectionGrid twoColumns>
				<Img width={450} widthM={'300px'} src={welcomeImg}></Img>
				<SectionFlex direction="column" justify="center" gap="1rem">
					<H2>¿Qué te parece si hoy escuchas algo totalmente nuevo?</H2>
					<H3>Sabemos que algunas veces escuchar las mismas canciones es aburrido así que ¡déjanos hacerte una playlist!</H3>
					<Button onClick={requestAuthorization}>¡Comenzar!</Button>
				</SectionFlex>
			</SectionGrid>
			<Footer/>
		</>
	);
};
