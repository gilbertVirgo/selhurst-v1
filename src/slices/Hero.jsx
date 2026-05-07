import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

export default ({
	title,
	body,
	buttons,
	landscapeVideoURL,
	portraitVideoURL,
}) => {
	const words = title.split(" ");
	const headerRef = useRef(null);
	const [isPortrait, setIsPortrait] = useState(false);

	useEffect(() => {
		if (!portraitVideoURL) return;
		const observer = new ResizeObserver(([entry]) => {
			const { width, height } = entry.contentRect;
			setIsPortrait(height > width);
		});
		if (headerRef.current) observer.observe(headerRef.current);
		return () => observer.disconnect();
	}, [portraitVideoURL]);

	const showPortrait = portraitVideoURL && isPortrait;

	return (
		<header ref={headerRef} className="relative w-full pt-24">
			<video
				src={landscapeVideoURL}
				playsInline
				autoPlay
				loop
				muted
				className={`absolute top-0 left-0 w-full h-full object-cover ${showPortrait ? "hidden" : ""}`}
			/>
			{portraitVideoURL && (
				<video
					src={portraitVideoURL}
					playsInline
					autoPlay
					loop
					muted
					className={`absolute top-0 left-0 w-full h-full object-cover ${showPortrait ? "" : "hidden"}`}
				/>
			)}

			<div className="h-full flex flex-col items-center justify-center text-center gap-18 py-24 lg:py-32 px-6 relative z-10 bg-gradient-to-b from-dark/15 to-dark/30 md:bg-dark/15 text-light">
				<div className="w-full max-w-7xl flex flex-col gap-12 items-center justify-center text-center ">
					<h1
						className="relative z-10 text-7xl lg:text-8xl xl:text-9xl text-balance"
						style={{ marginRight: "-0.125em" }}
					>
						{words.map((word, index) => (
							<span
								key={index}
								className="word-reveal"
								style={{
									animationDelay: `${index * 0.15}s`,
									marginRight: "0.25em",
								}}
							>
								{word}
							</span>
						))}
					</h1>
					<div className="relative z-10 text-xl lg:text-2xl flex flex-col gap-3 max-w-[30rem] text-balance">
						{body}
					</div>
				</div>
				<div className="relative z-10 flex flex-row gap-6">
					{buttons}
				</div>
			</div>
		</header>
	);
};
