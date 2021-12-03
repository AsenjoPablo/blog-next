import React from 'react';
import Link from 'next/link';
import MarkdownIt from 'markdown-it';
import LayoutComponent from '../components/Layouting/Layout';

export default function Post({ post }) {
	const md = new MarkdownIt();
	const blogContent = md.render(post.content);

	return (
		<LayoutComponent>
			<section className="min-h-screen mt-24 flex flex-col items-center justify-center bg-white">
				<div className="container flex flex-col">
					<Link href="/">
						<a className="mb-4 text-gray-400">Volver</a>
					</Link>
					<header>
						<h1 className="text-2xl font-bold">{post.title}</h1>
						<h2 className="italic opacity-60">
							Autor: {post.user.username}
						</h2>
					</header>
					<section
						className="markdown-blog-content"
						dangerouslySetInnerHTML={{ __html: blogContent }}
					></section>
				</div>
			</section>
		</LayoutComponent>
	);
}

// hay que decir a next cuántas páginas hay
export async function getStaticPaths() {
	const res = await fetch('http://localhost:1337/posts');
	const posts = await res.json();

	const paths = posts.map((post) => ({ params: { slug: post.slug } }));

	return {
		paths,
		fallback: false,
	};
}

// por cada página individual debemos obtener unos datos para mostrar
export async function getStaticProps({ params }) {
	const { slug } = params;

	// esta es la estructura de Strapi, tiene numerosas opciones de filtrado
	const res = await fetch(
		`http://localhost:1337/posts?slug=${slug}&_locale=es-ES`
	);

	const data = await res.json();

	// data será un array y solo queremos la primera posición
	const post = data[0];

	return {
		props: { post },
	};
}
