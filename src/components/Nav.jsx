import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const links = [
	{ href: "#find-us", label: "Find us" },
	{ href: "#watch-online", label: "Watch online" },
	{ href: "#get-in-touch", label: "Get in touch" },
];

export default () => {
	const [open, setOpen] = useState(false);

	const handleLinkClick = (e) => {
		setOpen(false);
		const href = e.currentTarget.getAttribute("href");
		if (href?.startsWith("#")) {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				const nav = document.querySelector("#navigation-bar nav");
				const offset = nav ? nav.getBoundingClientRect().height : 0;
				const top =
					target.getBoundingClientRect().top +
					window.scrollY -
					offset;
				window.scrollTo({ top, behavior: "smooth" });
			}
		}
	};

	return (
		<div
			id="navigation-bar"
			className={`w-full fixed top-0 left-0 right-0 z-50 bg-light/80 backdrop-blur-lg font-sans font-semibold text-dark ${
				open ? "drawer-reveal" : "drawer-close"
			}`}
		>
			<nav className="w-full h-24 flex items-center justify-center px-6">
				<div className="w-full max-w-7xl flex justify-between items-center">
					{/* Logo: glyph only on md and smaller, full logo on lg+ */}
					<img
						className="h-14 md:hidden"
						src="/assets/logo-glyph-only--dark.svg"
						alt="Selhurst Church Logo"
					/>
					<img
						className="h-20 hidden md:block"
						src="/assets/logo-with-text.svg"
						alt="Selhurst Church Logo"
					/>

					{/* Desktop links */}
					<div className="hidden md:flex flex-row gap-6 text-lg">
						{links.map(({ href, label }) => (
							<Button key={href} href={href} unstyled>
								{label}
							</Button>
						))}
					</div>

					{/* Mobile hamburger toggle */}
					<button
						className="md:hidden text-2xl p-2"
						onClick={() => setOpen((v) => !v)}
						aria-label={open ? "Close menu" : "Open menu"}
					>
						<FontAwesomeIcon
							icon={open ? faMinus : faBarsStaggered}
						/>
					</button>
				</div>
			</nav>

			{/* Mobile drawer */}
			<div
				className={`md:hidden w-full flex flex-col items-center gap-6 py-8 text-2xl ${
					!open ? "pointer-events-none" : ""
				}`}
			>
				{links.map(({ href, label }) => (
					<a
						key={href}
						href={href}
						onClick={handleLinkClick}
						className="hover:underline"
					>
						{label}
					</a>
				))}
			</div>
		</div>
	);
};
