import React from 'react';

import NavbarDropdown from './NavbarDropdown';

import { useState, useEffect } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [dropdownHeightClass, setDropdownHeightClass] = useState(
		'navbar-dropdown closed'
	);

	useEffect(() => {
		isMenuOpen
			? setDropdownHeightClass('navbar-dropdown open')
			: setDropdownHeightClass('navbar-dropdown closed');
	}, [isMenuOpen]);

	const handleMenuChange = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavigateMenu = () => {
		handleMenuChange();
	};
	return (
		<>
			<div className="z-20 fixed bg-primary w-full flex justify-between px-8 py-4 md:justify-around items-center">
				{/* Logo */}
				<a className="grid place-items-center">
					{/* <Image
						width="48"
						height="48"
						src="https://via.placeholder.com/48x48"
						alt="placeholder"
					/> */}
					<span className="text-white font-bold tracking-widest text-2xl z-30 uppercase">
						REACT NINJA
					</span>
				</a>

				{/* Links */}
				<ul className="text-white hidden md:flex">
					<li>
						<a
							className="text-lg hover:shadow-lg hover:scale-110 active:scale-95 active:shadow py-2 px-4 rounded-lg duration-150 mr-4"
							href="#home"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="text-lg hover:shadow-lg hover:scale-110 active:scale-95 active:shadow py-2 px-4 rounded-lg duration-150 mr-4"
							href="#skills"
						>
							Últimos posts
						</a>
					</li>
					<li>
						<a
							className="text-lg hover:shadow-lg hover:scale-110 active:scale-95 active:shadow py-2 px-4 rounded-lg duration-150 mr-4"
							href="#projects"
						>
							Contacto
						</a>
					</li>
				</ul>

				{/* Burger menu */}
				<div
					className="inline md:hidden z-30"
					onClick={handleMenuChange}
				>
					<svg
						className={
							(isMenuOpen ? 'rotate-90' : 'rotate-0') +
							' duration-200'
						}
						viewBox="0 0 100 80"
						width="40"
						height="40"
						fill="white"
					>
						<rect width="100" height="15" rx="8"></rect>
						<rect y="30" width="100" height="15" rx="8"></rect>
						<rect y="60" width="100" height="15" rx="8"></rect>
					</svg>
				</div>
			</div>

			{/* Dropdown Menu */}
			<NavbarDropdown dropdownHeightClass={dropdownHeightClass}>
				<ul className="flex flex-col items-center">
					<li
						onFocus={handleNavigateMenu}
						className="text-white font-bold tracking-widest uppercase text-2xl mb-4"
					>
						<a href="#home">Home</a>
					</li>
					<li
						onFocus={handleNavigateMenu}
						className="text-white font-bold tracking-widest uppercase text-2xl mb-4"
					>
						<a href="#skills">Últimos posts</a>
					</li>
					<li
						onFocus={handleNavigateMenu}
						className="text-white font-bold tracking-widest uppercase text-2xl "
					>
						<a href="#projects">Contacto</a>
					</li>
				</ul>
			</NavbarDropdown>
		</>
	);
}
