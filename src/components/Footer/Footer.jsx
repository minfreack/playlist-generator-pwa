import React from 'react';
import { A } from '../Commons/A';
import { Img } from '../Commons/Img';
import { P } from '../Commons/P';
import { SectionFlex } from '../Commons/SectionFlex';
import spotify from '../Images/spotify.svg';

export const Footer = () => {
	return (
		<SectionFlex direction="column" align="center" justify="center">
			<SectionFlex variant direction="row" align="center" justify="center">
				<P>Esta aplicación funciona con ayuda de </P>
			&nbsp;
				<Img src={spotify} width={30}></Img>
			</SectionFlex>
			<SectionFlex variant direction="row" align="center" justify="flex-end">
				<P variantF>Hecho con ♥ por <A href="https://minfreack.github.io/portfolio/" target="_blank" rel="noreferrer">Luis Ernesto</A> </P>
			</SectionFlex>
		</SectionFlex>
	);
};
