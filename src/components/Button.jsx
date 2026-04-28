import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

export default ({
	children,
	external,
	href,
	theme = "primary",
	size = "md",
}) => {
	let themes = {
		primary: "bg-primary text-dark hover:bg-primary/80",
		light: "bg-light text-dark hover:bg-light/80",
	};

	let sizes = {
		sm: "text-base",
		md: "text-xl",
		lg: "text-2xl",
	};

	return (
		<a
			href={href}
			className={`px-8 py-3 rounded-full font-sans tracking-tight font-semibold ${sizes[size]} ${themes[theme]} border-1 border-secondary`}
		>
			{children}
			{external ? (
				<FontAwesomeIcon icon={faExternalLink} className="ml-2" />
			) : null}
		</a>
	);
};
