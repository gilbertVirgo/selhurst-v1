import Button from "../components/Button";

export default ({ title, body, buttons, videoURL }) => {
	return (
		<header className="relative w-full">
			<video
				src={videoURL}
				playsInline
				autoPlay
				loop
				muted
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>

			<div className="min-h-screen flex flex-col items-center justify-center text-center gap-18 py-32 px-6 relative z-10 bg-dark/15 text-light">
				<div className="flex flex-col gap-12 items-center justify-center text-center">
					<h1 className="relative z-10 text-9xl text-balance">
						{title}
					</h1>
					<div className="relative z-10 text-2xl flex flex-col gap-3 max-w-[30rem] text-balance">
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
