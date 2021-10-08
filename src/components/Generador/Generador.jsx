import React, { useState, useEffect } from 'react';
import { Button } from '../Commons/Button';
import { Card } from '../Commons/Card';
import { H3 } from '../Commons/H3';
import { SectionFlex } from '../Commons/SectionFlex';
import { SectionGrid } from '../Commons/SectionGrid';
import { Title } from '../Commons/Title';
import { Footer } from '../Footer/Footer';
import { ProfileInfo } from '../ProfileInfo/ProfileInfo';
import { Search } from '../Search/Search';
import axios from 'axios';
import { ArtistInfo } from '../ArtistInfo/ArtistInfo';
import { SongInfo } from '../SongInfo/SongInfo';
import { GenreInfo } from '../GenreInfo/GenreInfo';
import { P } from '../Commons/P';
import { Modal } from '../Modal/Modal';
import { Redirect } from 'react-router';

export const Generador = () => {
	
	const [token, setToken] = useState('');
	const [data, setData] = useState('');
	const [songs, setSongs] = useState([]);
	const [artist, setArtist] = useState([]);
	const [genres, setGenres] = useState([]);
	const [songsUser, setSongsUser] = useState([]);
	const [artistUser, setArtistUser] = useState([]);
	const [genresUser, setGenresUser] = useState([]);
	const [modal, setModal] = useState(false);
	const [userId, setUserId] = useState('');

	const getSpotifyParams = (hash) => {
		const stringAfterHashtag = hash.substring(1);
		const paramsInUrl = stringAfterHashtag.split('&');
		const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
			const [key, value] = currentValue.split('=');
			accumulator[key] = value;
			return accumulator;
		}, {});
		return paramsSplitUp;
	};

	const handleGetUser = async(access_token) => {
		try {
			await axios.get('	https://api.spotify.com/v1/me', {
				headers: {
					Authorization: 'Bearer ' +access_token,
				}
			}).then(res => {
				setData(res.data);
				setUserId(res.data.id);
			});
		} catch (error) {
			console.log(error.message);
			if(error.message == 'Request failed with status code 401'){
				<Redirect to="/" />;
			}
		}
	};

	const handleGetGenders = async(access_token) => {
		await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
			headers: {
				Authorization: 'Bearer ' +access_token,
			}
		}).then( res => {
			setGenres(res.data.genres);
		});
	};

	useEffect(() => {
		if(window.location.hash){
			const { access_token, expires_in, token_type} = getSpotifyParams(window.location.hash);
			localStorage.clear();
			setToken(access_token);
			handleGetUser(access_token);
			handleGetGenders(access_token);
			localStorage.setItem('access_token', access_token);
			localStorage.setItem('expires_in', expires_in);
			localStorage.setItem('token_type', token_type);
			return token;
		}
	}, []);

	return (
		<>
			<SectionFlex variant direction="row" directionM="column" align="center" justify="space-between" padding="0 3.5rem" paddingM="1rem" gap="0">
				<ProfileInfo username={data.display_name}/>
				<Title>Playlist Generator</Title>
				<Button onClick={() => setModal(!modal)}>Ir al generador</Button>
			</SectionFlex>
			<Search token={token} setArtist={setArtist} setSongs={setSongs}/>
			<SectionGrid variant>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Artistas</H3>
						<P>{artistUser.length} seleccionado(s)</P>
					</SectionFlex>
					<SectionFlex direction="column" directionT="row" gap="1rem" wrapT="wrap">
						{
							artist?.map( ({name, images, id}) => {
								
								return (
									<ArtistInfo key={id} id={id} name={name} images={images} artistUser={artistUser} setArtistUser={setArtistUser}></ArtistInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Canciones</H3>
						<P>{songsUser.length} seleccionada(s)</P>
					</SectionFlex>
					<SectionFlex direction="column" directionT="row" gap="1rem" wrapT="wrap">
						{
							songs?.map( ({name, album, id}) => {
								
								return (
									<SongInfo key={id} id={id} name={name} album={album} songsUser={songsUser} setSongsUser={setSongsUser}></SongInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
				<Card>
					<SectionFlex align="center" justify="space-between" padding="0 0 1rem 0">
						<H3>Géneros</H3>
						<P>{genresUser.length} seleccionado(s)</P>
					</SectionFlex>
					<SectionFlex direction="row" gap="1rem" wrap="wrap" wrapT="wrap">
						{
							genres?.map( (genre, i) => {
								return (
									
									<GenreInfo  key={i} genre={genre} genresUser={genresUser} setGenresUser={setGenresUser}></GenreInfo>
								);
							})
						}
					</SectionFlex>
				</Card>
				{modal && <Modal 
					modal={modal} 
					setModal={setModal} 
					token={token} 
					userId={userId} 
					artistUser={artistUser} 
					songsUser={songsUser} 
					genresUser={genresUser}/>}
			</SectionGrid>
			<Footer/>
		</>
	);
};
