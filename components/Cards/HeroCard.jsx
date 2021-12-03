import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroCard({ post }) {
	return (
		<div className="max-w-sm flex flex-col p-4 border border-gray-200 bg-white shadow-lg rounded-xl">
			<div className="flex items-center mb-4">
				{/* author avi */}
				<Image
					className="rounded-full"
					src="https://via.placeholder.com/32x32"
					height="32"
					width="32"
				/>
				<span className="opacity-60 ml-2">{post.user.username}</span>
			</div>
			<div className="flex flex-col mb-4">
				<h2 className="font-semibold text-lg">{post.title}</h2>
				<p className="opacity-60">
					Laboris cillum officia magna eiusmod non velit magna culpa
					reprehenderit ut ullamco eiusmod Lorem pariatur. Et nostrud
					et ex proident dolor magna est ex quis. Ullamco velit enim
					eiusmod quis aute anim fugiat esse. Enim Lorem magna.
				</p>
			</div>
			<div className="flex">
				<button className="btn btn--warning mr-2">Más tarde</button>

				<Link href={`/${post.slug}`}>
					<a className="btn btn--primary">Ver</a>
				</Link>
			</div>
		</div>
	);
}
