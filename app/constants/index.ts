export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "MongoDB",
		icon: "/tech/mongodb.png"
	}
];

const experiences = [
	{
		title: "Frontend Developer",
		company_name: "CodeAlpha Summer Intern Program",
		icon: "/company/codeAlpha.png",
		iconBg: "#E6DEDD",
		date: "2024",
		points: [
			"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
		],
	},
	{
		title: "Software Developer",
		company_name: "Cling MultiSolutions Pvt. Ltd.",
		icon: "/company/cling.png",
		iconBg: "#E6DEDD",
		date: "2024 - Present",
		points: [
			"Developing and maintaining WebSite and Apps for clients all over India.",
			"Analyzing feedbacks and fixing bugs, Search Engine Optimization.",
			"Utilized version control systems such as github to manage codebase and collaborate with team members effectively.",
			"Collaborated with the development team to design, code, and test software solutions using Mern Stack , Next.js14, Redux, Tailwind CSS , React Native",
			"Engaged in agile development processes, attending daily stand-ups and sprint planning meetings to align with project goals and deliverables"
		],
	},
];

const testimonials = [
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Priyanshu Negi",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/priyanshu-negi-b4a61b22a",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Priyanshu Negi",
		image: "/tech/github.webp",
		link: "https://github.com/Priyanshu0202",
	},
];


const projects: {
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Web"
}[] = [
		{
			name: "CodeStack",
			description:
				"A Next.JS Full Stack Code Editor made using Next.Js, tailwindCss, framer-motion, convex with latest features like Next.JS Server Components, and Serverless features and sharing code snippits with payment intigration for pro access website using Nextjs",
			tags: [
				{
					name: "Nextjs",
					color: "blue-text-gradient",
				},
				{
					name: "Convex",
					color: "green-text-gradient",
				},
				{
					name: "framer-motion",
					color: "orange-text-gradient",
				},
				{
					name: "clerk",
					color: "pink-text-gradient"
				}
			],
			image: "/projectimg/codeStack.png",
			platform: "Vercel",
			deploy_link: "https://code-stack-chi.vercel.app",
		},
		{
			name: "PizzaMenia",
			description:
				" Designed and developed a visually appealing and user-friendly website using Next.JS. to order Pizzas with admin section to create and track orders including payment intigration using paypal",
			tags: [
				{
					name: "next",
					color: "red-text-gradient",
				},
				{
					name: "Next UI",
					color: "orange-text-gradient",
				},
				{
					name: "tailwind",
					color: "blue-text-gradient",
				},
				{
					name: "Express",
					color: "green-text-gradient"
				},
				{
					name: "mongodb",
					color: "pink-text-gradient"
				}
			],
			image: "/projectimg/pizzaDelivery.png",
			source_code_link: "https://github.com/Priyanshu0202/PizzaDelivery",
			platform: "Web",
			deploy_link: "https://pizza-delivery-iota.vercel.app",
		},
		{
			name: "Chatting Application",
			description:
				"A responsive WhatsApp like chatting website showcasing different features such as various such as grp chat's , single chats, advanced security, etc. It has a beautiful interface made using chackraUI and React",
			tags: [
				{
					name: "react",
					color: "green-text-gradient",
				},
				{
					name: "ChackraUI",
					color: "blue-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
				{
					name: "Express",
					color: "pink-text-gradient",
				},
			],
			image: "/projectimg/Chat2.PNG",
			source_code_link: "https://github.com/Priyanshu0202/chatApp2.0",
			platform: "Vercel",
			deploy_link: "https://talk-a-tive-dp9w.onrender.com",
		},
		{
			name: "SocioPedia",
			description:
				" Designed and developed a visually appealing and user-friendly Social Media Appication which has all the featues like posts , comments , likes",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "materialui",
					color: "orange-text-gradient",
				},
				{
					name: "MongoDB",
					color: "green-text-gradient",
				},
				{
					name: "Express",
					color: "pink-text-gradient",
				},
			],
			image: "/projectimg/social.PNG",
			source_code_link: "https://github.com/Priyanshu0202/Socialmedia-App",
			platform: "Web",
			deploy_link: "https://socialmedia-app-xi.vercel.app/",
		},
		{
			name: "Weather Application",
			description:
				"A weather prediction website with modern UI UX and open weather API's to predict weather for a week.",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "Bootstrap",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/Weather.PNG",
			source_code_link: "https://github.com/Priyanshu0202/WeatherApp",
			platform: "Vercel",
			deploy_link: "https://weather-forecast-b8d1d8.netlify.app/",
		},
		{
			name: "SpaceX clone",
			description:
				"A Designed and developed a visually appealing and user-friendly landing page of a spaceX with responsive designs.",
			tags: [
				{
					name: "react",
					color: "blue-text-gradient",
				},
				{
					name: "tailwind",
					color: "green-text-gradient",
				},
			],
			image: "/projectimg/spaceX.PNG",
			source_code_link: "https://github.com/Priyanshu0202/SpaceX-clone",
			platform: "Vercel",
			deploy_link: "https://spacex-clone-6e1798.netlify.app",
		},
	];

export { services, technologies, experiences, testimonials, projects };
