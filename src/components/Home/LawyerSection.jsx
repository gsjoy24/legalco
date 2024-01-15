import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Container from '../../Common/Container';
import SectionTitle from '../../Common/SectionTitle';

const LawyerSection = () => {
	const [lawyers, setLawyers] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await axios(`${import.meta.env.VITE_SERVER_URL}/lawyers`);
			setLawyers(response.data);
		})();
	}, []);

	return (
		<section className="py-16">
			<Container>
				<div className="text_shadow-color">
					<SectionTitle title={'Our Lawyer Team'}></SectionTitle>
				</div>
				<div>
					<Swiper
						// slidesPerView={1}
						breakpoints={{
							740: {
								slidesPerView: 2,
								spaceBetween: 0
							},
							790: {
								slidesPerView: 3,
								spaceBetween: 0
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 0
							}
						}}
						// 01923599398
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
						// loop={true}
						spaceBetween={0}
						pagination={{
							clickable: true
						}}
						modules={[Pagination, Autoplay, Navigation]}
						navigation={true}
						className="mySwiper"
					>
						{lawyers.map((lawyer) => (
							<SwiperSlide key={lawyer?._id}>
								<div className="card rounded-none bg-white hover:bg-[#508c9d77] transition-all w-full my-10 mt-20 border shadow-md border-[#2323237e]">
									<figure>
										<img
											loading="lazy"
											src={lawyer?.image}
											alt={lawyer?.name}
											width={300}
											height={300}
											className="w-full h-[320px] object-top object-cover shadow-sm"
										/>
									</figure>
									<div className="p-5 text-center flex flex-col justify-between">
										<h2 className={`text-xl mb-2`}>{lawyer?.name}</h2>
										<h3>{lawyer?.department}</h3>
										<Link to={`/lawyerdetails/${lawyer?._id}`} className="mt-4 lc_btn">
											Learn more
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
						{/* {lawyers.map((lawyer) => (
							<SwiperSlide key={lawyer?._id}>
								<div className="card rounded-none bg-white hover:bg-[#ccbd9977] transition-all w-full my-10 mt-20 border shadow-md border-[#2323237e]">
									<figure>
										<img
											loading="lazy"
											src={lawyer?.image}
											alt={lawyer?.name}
											width={300}
											height={300}
											className="w-full h-[320px] object-top object-cover shadow-sm"
										/>
									</figure>
									<div className="p-5 text-center flex flex-col justify-between">
										<h2 className={`text-xl mb-2`}>{lawyer?.name}</h2>
										<h3>{lawyer?.department}</h3>
										<Link to={`/lawyerdetails/${lawyer?._id}`} className="mt-4 lc_btn">
											Learn more
										</Link>
									</div>
								</div>
							</SwiperSlide>
						))} */}
					</Swiper>
				</div>
			</Container>
		</section>
	);
};

export default LawyerSection;
