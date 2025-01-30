"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ComputersCanvas } from "./canvas";

const roles = [
	"A Software Engineer",
	"A Full Stack Developer",
	"A React Native Developer",
];

const typingVariants = {
	hidden: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
	visible: {
		opacity: 1,
		clipPath: "inset(0 0 0 0)",
		transition: {
			duration: 3,
			ease: "linear",
			repeat: Infinity,
			repeatType: "loop" as "loop",
		},
	},
};
const roleVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1, ease: "easeInOut" },
	},
	exit: { opacity: 0, y: -10, transition: { duration: 0.8 } },
};

const Hero = () => {
	const [roleIndex, setRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className="heroHeadText text-white flex">
					Hi, I&apos;m 
						<motion.span
							className="text-[#915EFF] inline-block overflow-hidden whitespace-nowrap ml-5"
							variants={typingVariants}
							initial="hidden"
							animate="visible"
						>
							Priyanshu
						</motion.span>
					</h1>
					<motion.p
						key={roleIndex}
						className="heroSubText"
						variants={roleVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						{roles[roleIndex]}
					</motion.p>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
