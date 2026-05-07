import Button from "./components/Button";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Hero from "./slices/Hero";
import MapEmbed from "./slices/MapEmbed";
import SplitContentBlock from "./slices/SplitContentBlock";
import { useState } from "react";

function App() {
	return (
		<>
			<Nav />
			<Hero
				title="Welcome to Selhurst Church"
				body={
					<>
						<p>We're glad you're here.</p>
						<p>
							Our full website is coming soon. In the meantime,
							we’d love to share a little about who we are and how
							you can find us.
						</p>
					</>
				}
				buttons={
					<>
						<Button theme="primary" href="#find-us">
							Find us
						</Button>
						<Button theme="light" href="#get-in-touch">
							Get in touch
						</Button>
					</>
				}
				landscapeVideoURL="/assets/reel--landscape.mp4"
				portraitVideoURL="/assets/reel--portrait.mp4"
			/>
			<MapEmbed
				id="find-us"
				title="Join us this Sunday"
				description={
					<p>
						We meet every Sunday at 10:30am at Selhurst Church,
						Prince Rd, SE25&nbsp;6NR — you’d be very welcome.
					</p>
				}
				address="Selhurst Church, Prince Rd, SE25 6NR"
				googleMapsLink="https://maps.app.goo.gl/Dxi8ww5yBfSaoodK6"
			/>
			<div className="flex flex-col gap-24 py-24">
				<SplitContentBlock
					id="watch-online"
					title="Watch online"
					body={
						<p>
							You can watch our services and other videos on our
							YouTube channel.
						</p>
					}
					buttons={
						<Button
							size="sm"
							external
							href="https://www.youtube.com/@selhurstevangelicalchurchl3080"
						>
							Find us on YouTube
						</Button>
					}
					imageURL="/assets/watch-online.jpg"
					mask={1}
				/>
				<SplitContentBlock
					id="get-in-touch"
					title="Get in touch"
					body={<p>We&apos;d love to hear from you.</p>}
					buttons={
						<>
							<Button
								size="sm"
								external
								href="mailto:selhurstpastor@gmail.com"
							>
								Send us an email
							</Button>
							<Button
								size="sm"
								external
								href="sms:+447769700717"
								theme="light"
							>
								Send us a text message
							</Button>
						</>
					}
					imageURL="/assets/get-in-touch.jpg"
					mask={2}
					imageOnRight
				/>
			</div>
			<Footer />
		</>
	);
}

export default App;
