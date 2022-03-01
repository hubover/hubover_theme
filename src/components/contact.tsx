import { useState } from 'react';

const Contact = () => {
	const [src, setSrc] = useState('https://maps.google.com/maps?q=hubover&t=&z=19&ie=UTF8&iwloc=&output=embed');

	return (
		<div className="jumbotron bg-white" id="contact">
			<div className="container">
				<h1 className="display-block text-center font-weight-bold">Contact Us</h1>
				<h3 className="display-block text-center mb-5" style={{ color: '#9aa5aa' }}>
					Keep in touch with us. we are here to help you
				</h3>
				<div className="d-flex flex-row  mb-4 col-12">
					<div className=" flex-lg-column w-100">
						<ul className="mb-4">
							<li className="font-weight-bold row">Pakistan</li>
							<li className="row">Hubover Solutions</li>
							<li className="row">Lahore 54000</li>
							<li className="row">Pakistan</li>
							<li className="row">P +92-336-4256811</li>
						</ul>
						<div className="map">
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe width="100%" height="350" id="gmap_canvas" src={src} title="map" frameBorder="0" scrolling="no">
									</iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;