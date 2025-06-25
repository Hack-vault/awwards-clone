"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Simulate content loading and trigger fade-in
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100); // Short delay for a subtle fade-in effect
		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`transition-opacity duration-1000 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0"
			} flex flex-col items-center justify-center text-center p-8 max-w-md mx-auto bg-white shadow-xl rounded-lg`}
		>
			<div className="mb-6">
				<h1 className="text-4xl font-bold text-google-grey-800 mb-1">
					CHANDRA BOSE
				</h1>
				<p className="text-xl text-google-blue-700 font-medium">
					FRONTEND DEVELOPER
				</p>
			</div>

			<div className="flex space-x-4">
				<Link
					href="https://chandrabose.vercel.app"
					target="_blank"
					className="px-6 py-2 text-sm font-medium text-white bg-google-blue-500 rounded-md hover:bg-google-blue-600 focus:outline-none focus:ring-2 focus:ring-google-blue-500 focus:ring-opacity-50 transition-colors"
				>
					INFO
				</Link>
				<Link
					href="mailto:chandrabosep3112@gmail.com"
					target="_blank"
					className="px-6 py-2 text-sm font-medium text-google-blue-700 border border-google-blue-500 rounded-md hover:bg-google-blue-50 hover:text-google-blue-600 focus:outline-none focus:ring-2 focus:ring-google-blue-500 focus:ring-opacity-50 transition-colors"
				>
					CONTACT
				</Link>
			</div>
		</div>
	);
}
