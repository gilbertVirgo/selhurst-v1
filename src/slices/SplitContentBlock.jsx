const getMaskURL = (mask) => {
	if (typeof mask === "string") {
		return mask;
	}

	if (typeof mask === "number" && mask >= 1 && mask <= 6) {
		return `/assets/masks/${mask}.svg`;
	}

	return `/assets/masks/1.svg`;
};

export default ({
	id,
	imageURL,
	title,
	body,
	buttons,
	imageOnRight,
	mask = imageOnRight ? 1 : 2,
	imageAlt = "",
}) => {
	const textClasses = imageOnRight
		? "col-span-24 px-6 md:col-start-3 md:col-end-11 md:px-0 md:row-start-1"
		: "col-span-24 px-6 md:col-start-15 md:col-end-23 md:px-0 md:row-start-1";
	const imageClasses = imageOnRight
		? "col-span-24 px-6 md:col-start-13 md:col-end-24 md:px-0 md:row-start-1"
		: "col-span-24 px-6 md:col-start-2 md:col-end-13 md:px-0 md:row-start-1";
	const maskURL = getMaskURL(mask);

	let figure = (className) => (
		<figure className={imageClasses + ` ${className}`}>
			<div
				className="relative mx-auto w-full max-w-[42rem] overflow-hidden"
				style={{
					maskImage: `url(${maskURL})`,
					WebkitMaskImage: `url(${maskURL})`,
					maskPosition: "center",
					WebkitMaskPosition: "center",
					maskRepeat: "no-repeat",
					WebkitMaskRepeat: "no-repeat",
					maskSize: "contain",
					WebkitMaskSize: "contain",
				}}
			>
				<img
					src={imageURL}
					alt={imageAlt}
					className="h-full w-full object-cover"
				/>
			</div>
		</figure>
	);

	return (
		<section
			id={id}
			className="text-center md:text-left w-full max-w-7xl self-center grid grid-cols-24 items-center gap-y-12 md:gap-y-0"
		>
			<div className={`${textClasses} flex flex-col gap-12`}>
				<div className="flex flex-col gap-6 md:gap-8">
					<h2 className="text-5xl lg:text-6xl xl:text-7xl">
						{title}
					</h2>
					{figure("md:hidden")}
					<div className="text-xl text-balance xl:text-2xl flex flex-col gap-3">
						{body}
					</div>
				</div>
				<div className="flex flex-wrap gap-4 justify-center md:justify-start">
					{buttons}
				</div>
			</div>
			{figure("hidden md:block")}
		</section>
	);
};
