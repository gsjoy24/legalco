import Container from '../Common/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageMetaData from '../Common/PageMetaData';

const ServiceDetails = () => {
	const details = useLoaderData();
	const [lawyers, setLawyers] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios(`${import.meta.env.VITE_SERVER_URL}/lawyers`);
			setLawyers(res?.data);
		})();
	}, []);

	const { description, service } = details || {};
	return (
		<div className="-mt-24">
			<PageMetaData title={`${service} | LegalCo`} description={description} />

			<div className="service_banner_bg_image h-[450px] text-white flex items-end justify-center">
				<div className={`text-center mb-20`}>
					<h2 className="text-5xl">{service}</h2>
				</div>
			</div>
			<Container>
				<div className="my-20 bg-[#225559cc] p-3 md:p-10 rounded-lg ">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="text-white md:border-r-2 border-white md:pr-5">
							<h2 className={`text-4xl`}>{service}</h2>
							<p className="text-lg mt-8 text-justify md:text-left">{description}</p>
						</div>
						<div className="">
							<h2 className={`text-4xl mb-8 text-white`}>Available Lawyer</h2>
							{lawyers.slice(0, 5).map((lawyer) => (
								<div key={lawyer?._id} className="flex rounded-md my-5 items-center gap-5 group">
									<img
										src={lawyer?.image}
										alt={`Image of ${lawyer?.name}`}
										width={150}
										height={50}
										className="w  rounded-lg"
									/>
									<div>
										<Link to={`/lawyers/${lawyer?._id}`} className={`text-white text-xl group-hover:underline`}>
											{lawyer?.name}
										</Link>
										<h4 className="text-[#ccbd99]">{lawyer?.title}</h4>
									</div>
								</div>
							))}
						</div>
					</div>
					<Link className="lc_btn w-fit mx-auto block mt-8" to={'/appointment'}>
						Appointment Now
					</Link>
				</div>
			</Container>
		</div>
	);
};

export default ServiceDetails;
