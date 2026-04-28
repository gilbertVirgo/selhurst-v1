import Button from "../components/Button";

function getEmbedURL(address) {
	if (!address || typeof address !== "string") {
		throw new Error("Please provide a valid address string.");
	}

	const encoded = encodeURIComponent(address.trim());
	return `https://www.google.com/maps?q=${encoded}&output=embed`;
}

export default ({ id, title, description, address, googleMapsLink }) => {
	return (
		<section
			id={id}
			className="flex flex-col gap-16 py-24 px-6 bg-primary text-dark items-center"
		>
			<div className="flex flex-col gap-6 items-center">
				<h2 className="text-7xl">{title}</h2>
				<div className="text-2xl flex flex-col gap-3 max-w-[30rem] text-center text-balance">
					{description}
				</div>
			</div>
			<iframe
				className="w-full aspect-[4/3] md:aspect-[2/1] xl:aspect-[3/1]"
				src={getEmbedURL(address)}
			/>
			<Button external href={googleMapsLink} theme="light">
				Open in Google Maps
			</Button>
		</section>
	);
};
