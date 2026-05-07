import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default ({
	children,
	external,
	href,
	unstyled = false,
	theme = "primary",
	size = "md",
}) => {
	const handleClick = (e) => {
		if (!external && href?.startsWith("#")) {
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

	if (unstyled) {
		return (
			<a
				href={href}
				onClick={handleClick}
				className={`w-[max-content] font-sans tracking-tight font-semibold hover:underline`}
			>
				{children}
			</a>
		);
	}

	let themes = {
		primary: "bg-primary text-dark hover:bg-primary/80",
		light: "bg-light text-dark hover:bg-light/80",
	};

	let sizes = {
		xs: "text-base px-4 py-1",
		sm: "text-base px-6 py-2",
		md: "text-xl px-8 py-3 ",
		lg: "text-2xl px-10 py-4",
	};

	let externalProps = external
		? {
				target: "_blank",
				rel: "noopener noreferrer",
			}
		: {};

	return (
		<a
			{...externalProps}
			href={href}
			onClick={handleClick}
			className={`rounded-full w-[max-content] font-sans tracking-tight font-semibold ${sizes[size]} ${themes[theme]} border-1 border-secondary`}
		>
			{children}
			{external ? (
				<FontAwesomeIcon icon={faExternalLink} className="ml-2" />
			) : null}
		</a>
	);
};
