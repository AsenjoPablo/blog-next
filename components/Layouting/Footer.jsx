import React from 'react'
import Link from 'next/link';

export default function FooterComponent() {
    return (
        <div className="flex flex-col md:flex-row text-center bg-gray-800 text-white items-center justify-evenly p-16">
            <h3 className="mb-6 text-sm md:text-base">© Website created by Pablo Asenjo</h3>
            <div className="flex flex-col">
                <h3 className="mb-4 pb-2 border-b-2 border-white-soft">Contact me:</h3>
                <div className="flex flex-row">
                    <Link href="https://www.linkedin.com/in/pablo-asenjo-83950498/">
                        <a target="_blank">
                            <img className="footer-icon mr-4" src="logos/linkedin.svg" alt="linkedin logo" />
                        </a>
                    </Link>
                    <Link href="https://twitter.com/cooler_coder">
                        <a target="_blank">
                            <img className="footer-icon mr-4" src="logos/twitter.svg" alt="Twitter logo" />
                        </a>
                    </Link>
                    <Link href="mailto:pasenjo94@gmail.com">
                        <a target="_blank">
                            <img className="footer-icon" src="logos/email.svg" alt="Envelope logo" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}