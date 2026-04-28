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

	return (
		<section
			id={id}
			className="grid grid-cols-24 items-center gap-y-12 md:gap-y-0"
		>
			<div className={`${textClasses} flex flex-col gap-12`}>
				<div className="flex flex-col gap-8">
					<h2 className="text-7xl">{title}</h2>
					<div className="text-2xl flex flex-col gap-3">{body}</div>
				</div>
				<div className="flex flex-wrap gap-4">{buttons}</div>
			</div>

			<figure className={imageClasses}>
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
		</section>
	);
};
