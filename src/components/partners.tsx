const Partners = () => {
	return (
		<div className="container" id="partners">
			<div className="row w-110 pl-4">
				<h1 className="display-5 font-weight-bold w-100 text-center mt-5">Team Members</h1>
				<p className="lead text-center w-100">Get to know of our term</p>
				<div className="row w-100">
					<div className="col-lg-4 col-sm-12">
						<div className="img-thumbnail card-border">
							<a className="text-decoration-none" href="https://github.com/mohsinht" target="_blank" >
								<img className="greyscale featured-img" src={'/img/client1.jpg'} alt="pic" height="75px" width="75px" />
								<div className="caption">
									<p>
										I'm Computer Science student from Lahore, Pakistan. I like designing and web development.
									</p>
									<h5>Mohsin Hayat</h5>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className="img-thumbnail card-border">
							<a className="text-decoration-none" href="https://github.com/khunshan97" target="_blank" >
								<img className="greyscale featured-img" src={'/img/client2.jpg'} alt="pic" height="75px" width="75px" />
								<div className="caption">
									<p>
										I'm a CS student who's interested in achieving something revolutionary.
										With my team, I'm confident to overcome any challenges that comes in our way.
									</p>
									<h5>Khunshan Butt</h5>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<a className="text-decoration-none" href="https://github.com/mustafashykh" target="_blank">
							<div className="img-thumbnail card-border">
								<img className="greyscale featured-img" src={'/img/client3.jpg'} alt="pic" height="75px" width="75px" />
								<div className="caption">
									<p>
										I'm currently a Computer Science student. I have 2-year experience of coding in JAVA, PYTHON, TYPESCRIPT, CSS, HTML and C#.
									</p>
									<h5>Mustafa Sheikh</h5>
								</div>
							</div>
						</a>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Partners;