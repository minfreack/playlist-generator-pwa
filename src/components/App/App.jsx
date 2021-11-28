import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
// import { Generador } from '../Generador/Generador';
import { Welcome } from '../Welcome/Welcome';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import { Generador } from '../Generador/Generador';
import { Offline, Online } from 'react-detect-offline';
import { OfflineDashboard } from '../OfflineDashboard/OfflineDashboard';
import registerServiceWorker from '../../../serviceWorkerRegistration';
import OneSignal from 'react-onesignal'
const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #131313;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #EDEFF2;
  }
`;

export const App = () => {
	useEffect(() => {
		OneSignal.init({
			appId: "cab4d967-eda9-44dc-a7c3-6e7cb17f3dd1"
		});
	}, []);
	return (
		<>
			<Helmet>
				<title>Playlist Generator</title>
				<meta name="description" content="Playlist Generator"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
				<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
				<link rel="icon" type="image/png" sizes="36x36"  href="/android-icon-36x36.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<meta name="theme-color" content="#ffffff"/>
				<link rel="manifest" href="manifest.json"/>
				<script type="module" src="app.js" defer/>
				<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async></script>
				<script>window.OneSignal = window.OneSignal || [];</script>
			</Helmet>
			<GlobalStyles/>
			{registerServiceWorker()}
			<Router>
				<Switch>
					<Route exact path="/">
						<Online>
							<Welcome/>					
						</Online>
						<Offline>
							<OfflineDashboard/>
						</Offline>
					</Route>
					<Route exact path="/generador">
						<Online>
							<Generador/>					
						</Online>
						<Offline>
							<OfflineDashboard/>
						</Offline>
					</Route>
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};
