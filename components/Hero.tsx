"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useScramble } from "use-scramble";

export default function () {
	const { ref: nameRef, replay: nameReplay } = useScramble({
		text: "CHANDRA BOSE",
		scramble: 10,
		tick: 10,
		step: 3,
		range: [65, 90],
	});
	const { ref: roleRef, replay: roleReplay } = useScramble({
		text: "FRONTEND DEVELOPER",
		scramble: 10,
		tick: 8,
		step: 4,
		range: [65, 90],
	});

	const { ref: infoRef, replay: infoReplay } = useScramble({
		text: "INFO",
		scramble: 10,
		tick: 10,
		step: 1,
		range: [65, 90],
	});
	const { ref: contactRef, replay: contactReplay } = useScramble({
		text: "CONTACT",
		scramble: 9,
		tick: 8,
		step: 1.5,
		range: [65, 90],
	});

	useGSAP(() => {
		const tl = gsap.timeline();
		tl.to(".text-loader", {
			opacity: 1,
			duration: 0.1,
			stagger: {
				each: 0.2,
				repeat: 1,
				yoyo: true,
			},
		});
		tl.to(".loader", {
			display: "none",
		});
		tl.fromTo(
			".hero",
			{
				opacity: 0,
				x: -20,
				duration: 0.2,
			},
			{
				onStart: () => {
					nameReplay();
					roleReplay();
					infoReplay();
					contactReplay();
				},
				x: 0,
				ease: "power1.in",
				opacity: 1,
			}
		);
		tl.to(".star", {
			opacity: 1,
			duration: 1,
		});
	});

	return (
		<>
			<div className="flex gap-x-[0.5vw] md:gap-x-[1vw] font-normal loader justify-center items-center h-screen">
				{[...Array(10)].map((_, i) => (
					<div
						key={i}
						className="text-loader text-base md:text-xl opacity-0"
					>
						{i + 1}
					</div>
				))}

				<div className="text-loader text-base md:text-xl  ml-[2vw] md:ml-[10vw] opacity-0">
					23
				</div>
				<div className="text-loader text-base md:text-xl ml-[22vw] md:ml-[42rem] opacity-0">
					67
				</div>
				<div className="text-loader text-base md:text-xl ml-[10vw] md:ml-[30rem] opacity-0">
					97
				</div>
				<div className="text-loader text-base md:text-xl opacity-0">
					100
				</div>
			</div>

			<div className="hero opacity-0 text-lg leading-5 font-normal min-w-[14rem]">
				<div className="flex justify-between">
					<p ref={nameRef}>CHANDRA BOSE</p>
					<p className="star text-xl md:text-4xl !leading-6 opacity-0">
						*
					</p>
				</div>
				<p ref={roleRef}>FRONTEND DEVELOPER</p>
				<div className="flex justify-between py-6">
					<Link
						ref={infoRef}
						onMouseOver={infoReplay}
						onFocus={infoReplay}
						href="https://chandrabose.vercel.app"
						target="_blank"
					>
						INFO
					</Link>
					<Link
						ref={contactRef}
						onMouseOver={contactReplay}
						onFocus={contactReplay}
						href="mailto:chandrabosep3112@gmail.com"
						target="_blank"
					>
						CONTACT
					</Link>
				</div>
			</div>
		</>
	);
}
