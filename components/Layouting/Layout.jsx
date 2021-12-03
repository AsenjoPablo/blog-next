import React from 'react';

import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import FooterComponent from './Footer';

export default function LayoutComponent({ children }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="keywords"
					content="blog, desarrollo, react developer, website, HTML, CSS, JS, NEXTJS, projects, project, development, webdev, web development"
				/>
				<meta name="author" content="Pablo Asenjo Serrano" />

				{'<!-- Primary Meta Tags -->'}
				<title>AprendeReact.ninja - Sé un ninja de React!</title>
				<meta
					name="title"
					content="AprendeReact.ninja - Sé un ninja de React!"
				/>
				<meta
					name="description"
					content="La mejor web para aprender a programar con React"
				/>

				{'<!-- Open Graph / Facebook -->'}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://asenjoserrano.com/" />
				<meta
					property="og:title"
					content="AprendeReact.ninja - Sé un ninja de React!"
				/>
				<meta
					property="og:description"
					content="La mejor web para aprender a programar con React"
				/>
				<meta property="og:image" content="preview.png" />

				{'<!-- Twitter -->'}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://asenjoserrano.com/"
				/>
				<meta
					property="twitter:title"
					content="AprendeReact.ninja - Sé un ninja de React!"
				/>
				<meta
					property="twitter:description"
					content="La mejor web para aprender a programar con React"
				/>
				<meta property="twitter:image" content="preview.png" />

				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="favicon.ico"
				/>
			</Head>

			<Navbar />

			<main className="min-h-screen flex flex-col">{children}</main>

			<FooterComponent />
		</>
	);
}
