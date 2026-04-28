import Button from "./components/Button";
import Hero from "./slices/Hero";
import MapEmbed from "./slices/MapEmbed";
import SplitContentBlock from "./slices/SplitContentBlock";
import { useState } from "react";

function App() {
	return (
		<>
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
				videoURL="/assets/reel.mp4"
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
					title="Watch online"
					body={
						<p>
							You can watch our services and other videos on our
							YouTube channel.
						</p>
					}
					buttons={
						<Button
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
					title="Get in touch"
					body={<p>We&apos;d love to hear from you.</p>}
					buttons={
						<>
							<Button
								external
								href="mailto:selhurstpastor@gmail.com"
							>
								Send us an email
							</Button>
							<Button
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
		</>
	);
}

export default App;
