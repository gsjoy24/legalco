import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../Common/Container';
import SectionTitle from '../../Common/SectionTitle';
import LoadingPage from '../../shared/Loading';

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios(`${import.meta.env.VITE_SERVER_URL}/services`);
			if (res?.data) {
				setServices(res?.data);
			}
		})();
	}, []);

	return (
		<section className="py-20 bg_image" id="services">
			<Container>
				<div className="text-white">
					<SectionTitle title={'Areas Of Service'}></SectionTitle>
				</div>

				{/* Services Category */}
				<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{services ? (
						services?.map((service) => (
							<Link
								to={`/servicedetails/${service?._id}`}
								key={service?._id}
								className="border-2 bg-white shadow-lg p-5 flex items-center gap-5 rounded-2xl rounded-tr-none rounded-bl-none relative -top-1 -left-1  py-2.5 px-5  uppercase text-black transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
							>
								<img width={50} height={50} src={service?.icon} alt="icon" className="w-12 h-12" />
								<h3 className={`font-medium text-lg`}>{service?.service}</h3>
							</Link>
						))
					) : (
						<div className="col-span-3">
							<LoadingPage />
						</div>
					)}
				</div>
			</Container>
		</section>
	);
};

export default Services;
