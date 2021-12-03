import HeroCard from '../components/Cards/HeroCard';
import LayoutComponent from '../components/Layouting/Layout';

export default function Home({ posts }) {
	return (
		<LayoutComponent>
			<section className="min-h-screen flex flex-col items-center justify-center main__hero-background">
				<div className="container shadow-2xl p-16 rounded-lg bg-white border border-gray-300 flex flex-col">
					<h1 className="font-bold text-2xl mb-8 text-gray-600">
						Últimos posts en
						<span className="text-primary"> React Ninja</span>:
					</h1>

					<div className="flex flex-row items-start justify-start">
						{posts &&
							posts.map((post) => (
								<HeroCard post={post} key={post.id} />
							))}
					</div>
				</div>
			</section>
		</LayoutComponent>
	);
}

// esta función se encargará de hacer el fetch
export async function getStaticProps() {
	// petición a los posts de la API en STRAPI
	// se podría hacer una constante que añada la locale a todas las peticiones
	// ya que también la utilizamos en [slug] por ejemplo
	// const res = await fetch('http://localhost:1337/posts?_locale=es-ES');
	const res = await fetch('http://localhost:1337/posts');

	const posts = await res.json();

	return {
		props: { posts },
	};
}
