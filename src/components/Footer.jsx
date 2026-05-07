import Button from "./Button";

export default () => {
	return (
		<footer className="flex flex-col gap-16 py-24 px-6 bg-dark text-light items-center">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-12 w-full max-w-7xl">
				<div className="row-start-3 md:row-start-1 col-span-2 flex flex-row gap-3 justify-center md:justify-start items-start">
					<img
						className="w-24"
						src="/assets/logo-glyph-only--light.svg"
						alt="Selhurst Church Logo"
					/>
					<div className="flex flex-col gap-3">
						<p className="max-w-[32ch]">
							And as Moses lifted up the serpent in the
							wilderness, so must the Son of Man be lifted up,
							that whoever believes in him may have eternal life.
						</p>
						<h4>John 3:14-15</h4>
					</div>
				</div>
				<div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
					<h3 className="text-2xl">Join us</h3>
					<p>Sundays at 10:30am</p>
					<p>
						Selhurst Church, <br />
						Prince Rd, <br />
						SE25 6NR
					</p>
					<Button size="xs" href="#find-us" theme="primary">
						Find us
					</Button>
				</div>
				<div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
					<h3 className="text-2xl">Get in touch</h3>
					<p>
						<a href="mailto:hello@selhurstchurch.org">
							hello@selhurstchurch.org
						</a>
					</p>
				</div>
				<hr className="col-span-2 md:hidden border-t border-light/16" />
			</div>
		</footer>
	);
};
